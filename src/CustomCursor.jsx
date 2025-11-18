import React, { useEffect, useState } from "react";

export default function CursorDot() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Small dot above the default cursor */}
      <div
        style={{
          top: mousePos.y - 8, // above the arrow
          left: mousePos.x - 4, // center the dot
        }}
        className="fixed w-2 h-2 bg-red-500 rounded-full pointer-events-none z-50 transition-transform"
      ></div>
    </>
  );
}
