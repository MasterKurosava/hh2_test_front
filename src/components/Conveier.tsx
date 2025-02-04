import React from "react";
import "./css/Conveier.css";

interface ConveierProps {
  status: string;
  direction: "left" | "right" | "up" | "down";
  name: string;
}

export const Conveier: React.FC<ConveierProps> = ({ status, direction }) => {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center col-span-1 w-full h-10 border-3 ${status==="on" ? "border-green-600" : "border-red-600"}`}
      style={{
        transform:
          direction === "up"
            ? "rotate(90deg)"
            : direction === "down"
            ? "rotate(-90deg)"
            : "rotate(180deg)",
      }}
    >
      <div
        className={`absolute inset-0 conveyor-texture ${status === "on" ? `conveyor-moving` : ""}`}
      ></div>
    </div>
  );
};

export default Conveier;
