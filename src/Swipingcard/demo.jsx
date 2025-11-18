// // Format date as DD-MM-YYYY
// function formatDate(dateStr) {
//     if (!dateStr) return "";
//     const [year, month, day] = dateStr.split("-");
//     return `${day}-${month}-${year}`;
// }

// function loadMusterData(selectedMonth = "", currentUser = "", selectedEmployment = "") {
//     if (!selectedMonth) {
//         selectedMonth = String(new Date().getMonth() + 1).padStart(2, '0');
//     }

//     frappe.call({
//         method: "frappe.desk.query_report.run",
//         args: {
//             report_name: "musterallmonthwithtotal",
//             filters: { 
//                 month: selectedMonth,
//                 user_id: currentUser  
//             }
//         },
//         callback: function (response) {
//             const data = response.message.result || [];
//             const tableBody = document.getElementById("table-contant-body");
//             tableBody.innerHTML = "";

//             if (data.length === 0) {
//                 tableBody.innerHTML = '<tr><td colspan="100%">No data available</td></tr>';
//                 return;
//             }

//             // Populate employment type dropdown (only once or each load)
//             const emptSet = new Set();
//             data.forEach(entry => {
//                 if (entry.employment_type) emptSet.add(entry.employment_type.trim());
//             });
//             const emptSelect = document.getElementById("employmentSelector");
//             emptSelect.innerHTML = '<option value="">All Employment Type</option>';
//             emptSet.forEach(empt => {
//                 const option = document.createElement("option");
//                 option.value = empt;
//                 option.textContent = empt;
//                 emptSelect.appendChild(option);
//             });

//             // Filter data by selected employment type
//             const filteredData = selectedEmployment
//                 ? data.filter(d => d.employment_type === selectedEmployment)
//                 : data;

//             // Build table
//             const groupedData = {};
//             filteredData.forEach(entry => {
//                 const empId = entry.employee;
//                 if (!groupedData[empId]) {
//                     groupedData[empId] = {
//                         employee: entry.employee,
//                         employee_name: entry.employee_name,
//                         date_of_joining: entry.date_of_joining,
//                         days: {},
//                         total_working_days: entry.total_working_days || 0
//                     };
//                 }

//                 if (entry.attendance_date) {
//                     const day = new Date(entry.attendance_date).getDate();
//                     groupedData[empId].days[day] = (entry.status || "").toUpperCase();
//                 }
//             });

//             let index = 0;
//             for (const empId in groupedData) {
//                 const emp = groupedData[empId];
//                 const tr = document.createElement("tr");
//                 tr.innerHTML = `
//                     <td>${++index}</td>
//                     <td class="text-start">${emp.employee}</td>
//                     <td class="text-start">${emp.employee_name}</td>
//                     <td class="designation-column">${formatDate(emp.date_of_joining)}</td>
//                 `;
//                 for (let i = 1; i <= 31; i++) {
//                     const status = emp.days[i] || "";
//                     tr.innerHTML += `<td>${status}</td>`;
//                 }
//                 tr.innerHTML += `<td>${emp.total_working_days}</td>`;
//                 tableBody.appendChild(tr);
//             }
//         }
//     });
// }

// // Add listener for employment type change
// document.getElementById("employmentSelector").addEventListener("change", function() {
//     const selectedEmpType = this.value;
//     const selectedMonth = document.getElementById("monthSelector").value;
//     loadMusterData(selectedMonth, currentUser, selectedEmpType);
// });


// // ✅ Get logged-in user first, then load report
// let currentUser = "";
// frappe.call({
//     method: "frappe.auth.get_logged_user",
//     callback: function(r) {
//         currentUser = r.message;
//         console.log("Logged in User:", currentUser);

//         const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
//         document.getElementById("monthSelector").value = currentMonth;
//         loadMusterData(currentMonth, currentUser);
//     }
// });



// // On month change
// document.getElementById("monthSelector").addEventListener("change", function () {
//     const selectedMonth = this.value;
//     loadMusterData(selectedMonth, currentUser);
// });
//  const emptSet = new Set();
//             data.forEach(entry => {
//                 if (entry.employment_type) emptSet.add(entry.employment_type.trim());
//             });
//             const emptSelect = document.getElementById("employmentSelector");
//             emptSelect.innerHTML = '<option value="">All Employment Type</option>';
//             emptSet.forEach(empt => {
//                 const option = document.createElement("option");
//                 option.value = empt;
//                 option.textContent = empt;
//                 option.selected = (empt === selectedEmpt);
//                 emptSelect.appendChild(option);
//             });


// // Print Function
// document.addEventListener("DOMContentLoaded", function() {
//     const excelBtn = document.getElementById("excelExportBtn");
//     excelBtn.addEventListener("click", function () {
//         const table = document.getElementById("maintable");
//         if (!table) return alert("Table not found!");

//         // SheetJS export
//         const wb = XLSX.utils.table_to_book(table, { sheet: "Attendance" });
//         XLSX.writeFile(wb, "Attendance_Report.xlsx");
//     });
// });



// document.getElementById("employmentSelector").addEventListener("change", function() {
//     const selectedEmpType = this.value;
//     const selectedMonth = document.getElementById("monthSelector").value;
//     loadMusterData(selectedMonth, currentUser, selectedEmpType);
// });
----------------------------------------------------------------------------


function formatDate(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
}

// Load data based on selected month & department
function loadMusterData(selectedMonth = "", selectedDept = "", selectedEmpt = "") {
    if (!selectedMonth) {
        selectedMonth = String(new Date().getMonth() + 1).padStart(2, '0');
    }

    frappe.call({
        method: "frappe.desk.query_report.run",
        args: {
            report_name: "musterallmonthwithtotal",
            filters: { month: selectedMonth }
        },
        callback: function (response) {
            const data = response.message.result || [];
            const tableBody = document.getElementById("table-contant-body");
            tableBody.innerHTML = "";

            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="100%">No data available</td></tr>';
                return;
            }
            const emptSet = new Set();
            data.forEach(entry => {
                if (entry.employment_type) emptSet.add(entry.employment_type.trim());
            });
            const emptSelect = document.getElementById("employmentSelector");
            emptSelect.innerHTML = '<option value="">All Employment Type</option>';
            emptSet.forEach(empt => {
                const option = document.createElement("option");
                option.value = empt;
                option.textContent = empt;
                option.selected = (empt === selectedEmpt);
                emptSelect.appendChild(option);
            });



            // 🔹 Frontend Filtering
 const filteredData = selectedEmployment
                ? data.filter(d => d.employment_type === selectedEmployment)
                : data;


            // Group data by employee
            const groupedData = {};
            filteredData.forEach(entry => {
                const empId = entry.employee;
                if (!groupedData[empId]) {
                    groupedData[empId] = {
                        employee: entry.employee,
                        employee_name: entry.employee_name,
                        department: entry.department,
                        designation: entry.designation,
                        date_of_birth: entry.date_of_birth,
                        date_of_joining: entry.date_of_joining,
                        days: {},
                        total_working_days: parseFloat(entry.total_working_days) || 0,
                         total_present: entry.total_present || 0,
                         total_absent: entry.total_absent || 0,
                         net_present: entry.net_regular_present || 0
        
                    };
                }

                if (entry.attendance_date) {
                    const day = new Date(entry.attendance_date).getDate();

                    let status = (entry.status || "").toLowerCase();
                    if (status === "sunday") status = "S";
                    else if (status === "late attendance") status = "LA";
                    else if (status === "evening permission" || status === "permission") status = "PER";
                    else if (status === "half day") status = "FN H";
                    else if (status === "second half") status = "AN H";
                    else if (status === "single punch") status = "SP";
                    else if (status === "") status = "A";

                    groupedData[empId].days[day] = status.toUpperCase();
                }
            });

            let index = 0;
            for (const empId in groupedData) {
                const emp = groupedData[empId];
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${++index}</td>
                    <td class="text-start">${emp.employee}</td>
                    <td class="text-start">${emp.employee_name}</td>
                    <td class="text-start">${emp.department || ""}</td>
                    <td class="text-start designation-column">${emp.designation || ""}</td>
                    <td class="designation-column">${formatDate(emp.date_of_birth)}</td>
                    <td class="designation-column">${formatDate(emp.date_of_joining)}</td>
                `;

                
               for (let i = 1; i <= 31; i++) {
    const status = emp.days[i] || "A";
    let color = "";

    if (status === "P") color = "green";
    else if (status === "L" || status === "A") color = "red";
    else if (status === "S") color = "blue";
    else if (status === "LA") color = "orange";
    else if (status === "PER") color = "purple";
    else if (status === "FN H" || status === "AN H") color = "brown";

    tr.innerHTML += `<td style="border: 1px solid #ccc; text-align: center; color: ${color};">${status}</td>`;
}
tr.innerHTML += `
<td style="color: green; font-weight: bold;">${emp.total_present}</td>
    <td style="font-weight: bold;">${emp.net_present}</td>
    
    <td style="color: red; font-weight: bold;">${emp.total_absent}</td>
`;
                tableBody.appendChild(tr);
            }
        },
        error: function (err) {
            console.error("Error fetching report data:", err);
        }
    });
}


document.getElementById("employmentSelector").addEventListener("change", function () {
    const selectedEmpt = this.value;
    const selectedDept = document.getElementById("departmentSelector").value;
    const selectedMonth = document.getElementById("monthSelector").value;
    loadMusterData(selectedMonth, selectedDept, selectedEmpt);
});

// 🔹 Excel Export
document.getElementById("excelExportBtn").addEventListener("click", async function () {
    const table = document.getElementById("table-contant-body");
    const rows = table.querySelectorAll("tr");

    if (!rows.length) {
        alert("No data to export.");
        return;
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Attendance");

    const headers = ["S.No", "Employee ID", "Employee Name", "Department"];
    for (let i = 1; i <= 31; i++) headers.push(i);
    headers.push("Total Days", "Present Days", "Absent Days");

    sheet.addRow(["FORM NO.25"]);
    sheet.addRow(["(Prescribed under Rule 103 of the Tamil Nadu Factories Rules, 1950 and Payment of Wages Act)"]);
    sheet.addRow(["REGISTER OF MUSTER ROLL"]);

    sheet.mergeCells(1, 1, 1, headers.length);
    sheet.mergeCells(2, 1, 2, headers.length);
    sheet.mergeCells(3, 1, 3, headers.length);

    [1, 2, 3].forEach(r => {
        const row = sheet.getRow(r);
        row.font = { bold: true, size: 14 };
        row.alignment = { vertical: "middle", horizontal: "center" };
    });

    const headerRow = sheet.addRow(headers);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };
    headerRow.eachCell(cell => {
        cell.border = { top:{style:"thin"}, left:{style:"thin"}, bottom:{style:"thin"}, right:{style:"thin"} };
        cell.fill = { type:"pattern", pattern:"solid", fgColor:{argb:"FFEFEFEF"} };
    });

    rows.forEach(tr => {
        const tds = tr.querySelectorAll("td");
        const rowData = [];

        rowData.push(tds[0]?.innerText.trim());
        rowData.push(tds[1]?.innerText.trim());
        rowData.push(tds[2]?.innerText.trim());
        rowData.push(tds[3]?.innerText.trim());

        for (let i = 7; i < tds.length - 3; i++) {
            let status = tds[i].innerText.trim().toUpperCase().replace(/\s+/g, ' ');

            if (status === "L" || status === "A" || status === "") status = "A";
            else if (status === "FN H" || status === "AN H" || status === "HALF DAY" || status === "SECOND HALF") status = "H";
            else if (status === "PER" || status === "LA") status = "P";
            else if (status === "OD") status = "OD";
            else status = "P";

            rowData.push(status);
        }

        rowData.push(tds[tds.length - 3]?.innerText.trim()); // Total Days from query
        rowData.push(tds[tds.length - 2]?.innerText.trim());
        rowData.push(tds[tds.length - 1]?.innerText.trim());

        const row = sheet.addRow(rowData);
        row.alignment = { vertical: "middle", horizontal: "center" };
        row.eachCell(cell => {
            cell.border = { top:{style:"thin"}, left:{style:"thin"}, bottom:{style:"thin"}, right:{style:"thin"} };
        });
    });

    sheet.columns = [
        { width: 6 }, { width: 20 }, { width: 30 }, { width: 25 },
        ...Array.from({ length: 31 }, () => ({ width: 8 })),
        { width: 15 }, { width: 15 }, { width: 15 }
    ];

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Attendance_Report.xlsx";
    link.click();
});

// 🔹 Print Function
document.getElementById("printBtn").addEventListener("click", function () {
    const table = document.getElementById("table-contant-body");
    if (!table || !table.innerHTML.trim()) {
        alert("No data available to print.");
        return;
    }

    const tableHtml = `
        <html>
        <head>
            <title>Register of Muster Roll</title>
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px !important; padding: 20px; }
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #000; padding: 4px; text-align: center; font-size: 10px !important; }
                .text-start { text-align: left; }
                h2, h3 { text-align: center; margin: 5px 0; }
                @media print {
                    @page { size: A4 landscape; margin: 20mm; }
                    body { margin: 0px; }
                }
            </style>
        </head>
        <body>
            <h2>FORM NO.25</h2>
            <h3>(Prescribed under Rule 103 of the Tamil Nadu Factories Rules, 1950 and Payment of Wages Act)</h3>
            <h3>REGISTER OF MUSTER ROLL</h3>

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Emp ID</th>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Date of Birth</th>
                        <th>Date of Joining</th>
                        ${Array.from({ length: 31 }, (_, i) => `<th>${i + 1}</th>`).join("")}
                        <th>Total Days</th>
                        <th>Present Days</th>
                        <th>Absent Days</th>
                    </tr>
                </thead>
                <tbody>
                    ${table.innerHTML}
                </tbody>
            </table>
        </body>
        </html>
    `;
    const printWindow = window.open('', '', 'height=800,width=1200');
    printWindow.document.write(tableHtml);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
});

// Initial load
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
document.getElementById("monthSelector").value = currentMonth;
loadMusterData(currentMonth, "");

