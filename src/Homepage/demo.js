$(document).ready(function () {
  // Fallback if root_element isn't defined
  const root = typeof root_element !== "undefined" ? root_element : document;

  const tableBody        = root.querySelector(".qualifiedleads-table");
  const monthFilter      = root.querySelector("#monthFilter");
  const dateFilter       = root.querySelector("#dateFilter");
  const prevBtn          = root.querySelector("#prevPage");
  const nextBtn          = root.querySelector("#nextPage");
  const pageInfo         = root.querySelector("#pageInfo");
  const selectAllCheckbox= root.querySelector("#selectAll");
  const employeeFilter   = root.querySelector("#employeeFilter"); // text input

  let employees = [];        // full dataset from API
  let filteredEmployees = []; // after applying filters
  let currentPage = 1;
  const rowsPerPage = 20;

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const now = new Date();
  const currentMonthIndex = now.getMonth(); // 0-based
  const currentMonth = String(currentMonthIndex + 1).padStart(2, "0");

  // Populate month dropdown (Jan..current month)
  for (let index = 0; index <= currentMonthIndex; index++) {
    const option = document.createElement("option");
    option.value = String(index + 1).padStart(2, "0");
    option.textContent = monthNames[index];
    monthFilter.appendChild(option);
  }
  monthFilter.value = currentMonth;

  // Clear date initially
  if (dateFilter) dateFilter.value = "";

  // Utils
  const safeLower = (v) => (v ?? "").toString().toLowerCase();

  function formatDiffHours(decimalHours) {
    if (decimalHours === null || decimalHours === undefined) return "-";
    const h = Math.floor(decimalHours);
    const m = Math.round((decimalHours - h) * 60);
    return `${h}:${String(m).padStart(2, "0")}`;
  }

  // Fetch data for a month, then apply filters and render
  function fetchAndRenderData(month) {
    const filters = { month };
    const apiUrl = `https://whales.kggeniuslabs.com/api/method/frappe.desk.query_report.run?report_name=earlycheckinrefined&filters=${encodeURIComponent(JSON.stringify(filters))}`;

    fetch(apiUrl)
      .then((r) => r.json())
      .then((data) => {
        if (data.message && data.message.result) {
          employees = data.message.result || [];
          currentPage = 1;
          applyFiltersAndRender();
        } else {
          employees = [];
          applyFiltersAndRender();
          console.error("Invalid API response format:", data);
        }
      })
      .catch((err) => {
        console.error("Fetch API call failed:", err);
        employees = [];
        applyFiltersAndRender();
      });
  }

  // Apply date + name filters locally
  function applyFiltersAndRender() {
    let out = [...employees];

    // Date filter — compare YYYY-MM-DD strings to avoid timezone shifts
    const selectedDate = dateFilter ? dateFilter.value : "";
    if (selectedDate) {
      out = out.filter((emp) => (emp.checkin_time || "").slice(0, 10) === selectedDate);
    }

    // Employee text filter (matches employee code or name, case-insensitive)
    const query = employeeFilter ? safeLower(employeeFilter.value.trim()) : "";
    if (query) {
      out = out.filter(
        (emp) =>
          safeLower(emp.employee_name).includes(query) ||
          safeLower(emp.employee).includes(query)
      );
    }

    filteredEmployees = out;

    // Keep currentPage in range
    const totalPages = Math.max(1, Math.ceil(filteredEmployees.length / rowsPerPage));
    if (currentPage > totalPages) currentPage = 1;

    renderTablePage(filteredEmployees, currentPage);
  }

  function renderTablePage(data, page) {
    if (!tableBody) return;
    tableBody.innerHTML = "";

    if (!data || data.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center fw-bold text-danger">No records found</td>
        </tr>`;
      if (pageInfo) pageInfo.textContent = `Page 0 of 0`;
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;
      if (selectAllCheckbox) selectAllCheckbox.checked = false;
      return;
    }

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((emp) => {
      const qt = emp.checkin_id;
      const link = `<a href="https://whales.kggeniuslabs.com/app/employee-checkin/${qt}" target="_blank" style="text-decoration:none;color:inherit">${emp.employee}</a>`;

      const actionCell =
        !emp.custom_early_ot || emp.custom_early_ot === "00:00:00" || emp.custom_early_ot === 0
          ? `<button class="btn btn-success update-btn">Update</button>`
          : `<span class="text-success fw-bold">Record has been updated</span>`;

      const row = `
        <tr>
          <td>${link}</td>
          <td class="text-center">${emp.employee_name ?? ""}</td>
          <td class="text-center">${emp.checkin_time ?? ""}</td>
          <td class="text-center">${emp.shift_start_time ?? ""}</td>
          <td class="text-center">${formatDiffHours(emp.diff_hours)}</td>
          <td class="text-center">${actionCell}</td>
        </tr>`;
      tableBody.innerHTML += row;
    });

    const totalPages = Math.ceil(data.length / rowsPerPage);
    if (pageInfo) pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;

    if (selectAllCheckbox) selectAllCheckbox.checked = false;
  }

  // Pagination
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTablePage(filteredEmployees, currentPage);
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderTablePage(filteredEmployees, currentPage);
      }
    });
  }

  // Filters
  if (monthFilter) {
    monthFilter.addEventListener("change", () => {
      fetchAndRenderData(monthFilter.value);
    });
  }
  if (dateFilter) {
    dateFilter.addEventListener("change", () => {
      currentPage = 1;
      applyFiltersAndRender();
    });
  }
  if (employeeFilter) {
    // instant filtering while typing
    employeeFilter.addEventListener("input", () => {
      currentPage = 1;
      applyFiltersAndRender();
    });
  }

  // Update-button action
  root.addEventListener("click", async function (e) {
    if (e.target && e.target.classList.contains("update-btn")) {
      const row = e.target.closest("tr");
      if (!row) return;

      const record = {
        employee: row.children[0].textContent.trim(),
        employee_name: row.children[1].textContent.trim(),
        formattedCheckin: row.children[2].textContent.trim(),
        shiftTime: row.children[3].textContent.trim(),
        diffHours: row.children[4].textContent.trim(),
      };

      frappe.msgprint(`Updating for ${record.employee_name}...`);

      try {
        await frappe.call({
          method: "Early_check_in",
          args: { record },
        });
        frappe.msgprint(`✅ Successfully updated for ${record.employee_name}`);
      } catch (err) {
        frappe.msgprint(`❌ Error: ${err.message}`);
      }
    }
  });

  // Initial load
  fetchAndRenderData(currentMonth);
});
----------------------------------------------------------------old
$(document).ready(function () {
    const tableBody = root_element.querySelector(".qualifiedleads-table");
    const monthFilter = root_element.querySelector("#monthFilter");
    const dateFilter = root_element.querySelector("#dateFilter");
    const prevBtn = root_element.querySelector("#prevPage");
    const nextBtn = root_element.querySelector("#nextPage");
    const pageInfo = root_element.querySelector("#pageInfo");
    const selectAllCheckbox = root_element.querySelector("#selectAll");
  const employeeFilter   = root.querySelector("#employeeFilter"); // text input

    let employees = [];
    let filteredEmployees = [];
    let currentPage = 1;
    const rowsPerPage = 20;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const now = new Date();
    const currentMonthIndex = now.getMonth(); // 0-based index
const currentMonth = String(currentMonthIndex + 1).padStart(2, "0");

    // Populate month dropdown
    for (let index = 0; index <= currentMonthIndex; index++) {
        const option = document.createElement("option");
        option.value = String(index + 1).padStart(2, "0");
        option.textContent = monthNames[index];
        monthFilter.appendChild(option);
    }
    monthFilter.value = currentMonth;

    // Clear date initially
    
 if (dateFilter) dateFilter.value = "";

  // Utils
  const safeLower = (v) => (v ?? "").toString().toLowerCase();

  function formatDiffHours(decimalHours) {
    if (decimalHours === null || decimalHours === undefined) return "-";
    const h = Math.floor(decimalHours);
    const m = Math.round((decimalHours - h) * 60);
    return `${h}:${String(m).padStart(2, "0")}`;
  }


    function fetchAndRenderData(month) {
        const filters = { month };
        const apiUrl = `https://whales.kggeniuslabs.com/api/method/frappe.desk.query_report.run?report_name=earlycheckinrefined&filters=${encodeURIComponent(JSON.stringify(filters))}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.message && data.message.result) {
                    employees = data.message.result || [];
 currentPage = 1;
          applyFiltersAndRender();
                    const selectedDate = dateFilter.value;
                    if (selectedDate) {
                        const selectedDateISO = new Date(selectedDate).toISOString().split("T")[0];
                        employees = employees.filter(emp => {
                            const empDate = new Date(emp.checkin_time).toISOString().split("T")[0];
                            return empDate === selectedDateISO;
                        });
                    }

                    currentPage = 1;
                    renderTablePage(employees, currentPage);
                } else {
                    console.error("Invalid API response format:", data);
                }
            })
            .catch(error => console.error("Fetch API call failed:", error));
    }

    function renderTablePage(data, page) {
        tableBody.innerHTML = "";

        if (data.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center fw-bold text-danger">No records found</td>
                </tr>`;
            pageInfo.textContent = `Page 0 of 0`;
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(emp => {
            const qt = emp.checkin_id;
            const link = `<a href="https://whales.kggeniuslabs.com/app/employee-checkin/${qt}" target="_blank" style="text-decoration:none;color:inherit">${emp.employee}</a>`;

            const date = new Date(emp.checkin_time);
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
            const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
            const formattedCheckin = `${formattedTime}, ${formattedDate}`;

            const shiftDate = new Date(emp.shift_start_time.replace(' ', 'T'));
            const shiftTime = `${shiftDate.getHours().toString().padStart(2, '0')}:${shiftDate.getMinutes().toString().padStart(2, '0')}`;
            function formatDiffHours(decimalHours) {
                if (!decimalHours && decimalHours !== 0) return "-";
                const hours = Math.floor(decimalHours);
                const minutes = Math.round((decimalHours - hours) * 60);
                return `${hours}:${minutes.toString().padStart(2, '0')}`;
            }

            const diffHours = (() => {
                const hours = Math.floor(emp.diff_hours);
                const minutes = Math.round((emp.diff_hours - hours) * 60);
                return `${hours}:${minutes.toString().padStart(2, '0')}`;
            })();
              const actionCell = !emp.custom_early_ot || emp.custom_early_ot === "00:00:00" || emp.custom_early_ot === 0
                  ? `<button class="btn btn-success update-btn">Update</button>`
                  : `<span class="text-success fw-bold">Record has been updated</span>`;
            console.log(emp.custom_early_ot)
            const row = `
                <tr>
                    <td>${link}</td>
                    <td class="text-center">${emp.employee_name}</td>
                    <td class="text-center">${emp.checkin_time}</td>
                    <td class="text-center">${emp.shift_start_time}</td>
                    <td class="text-center">${formatDiffHours(emp.diff_hours)}</td>
                    <td class="text-center">${actionCell}</td>
                    
                </tr>`;
            tableBody.innerHTML += row;
        });

        const totalPages = Math.ceil(data.length / rowsPerPage);
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;

        if (selectAllCheckbox) {
            selectAllCheckbox.checked = false;
        }
    }

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderTablePage(employees, currentPage);
        }
    });

    nextBtn.addEventListener("click", () => {
        const totalPages = Math.ceil(employees.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTablePage(employees, currentPage);
        }
    });

    // Event listeners
    monthFilter.addEventListener("change", () => {
        fetchAndRenderData(monthFilter.value);
    });

    dateFilter.addEventListener("change", () => {
        fetchAndRenderData(monthFilter.value);
    });

    // Action Button click
    root_element.addEventListener("click", async function (e) {
        if (e.target && e.target.classList.contains("update-btn")) {
            const row = e.target.closest("tr");
            if (!row) return;

            const record = {
                employee:row.children[0].textContent.trim(),
                employee_name: row.children[1].textContent.trim(),
                formattedCheckin: row.children[2].textContent.trim(),
                shiftTime: row.children[3].textContent.trim(),
                diffHours: row.children[4].textContent.trim()
            };

            frappe.msgprint(`Updating for ${record.employee_name}...`);

            try {
                const response = await frappe.call({
                    method: "Early_check_in", // your server-side method
                    args: { record: record }
                });

                frappe.msgprint(`✅ Successfully updated for ${record.employee_name}`);
            } catch (err) {
                frappe.msgprint(`❌ Error: ${err.message}`);
            }
        }
    });

    // Initial load
    fetchAndRenderData(currentMonth);
});
