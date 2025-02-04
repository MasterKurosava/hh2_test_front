import React from "react";
import { Device as DeviceType, Conveyor } from "../config/state";

interface ControlPanelProps {
  devices: DeviceType[];
  conveyors: Conveyor[];
  stationStatus: string;
  toggleDevice: (id: number, name: string) => void;
  toggleConveyor: (id: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  devices,
  conveyors,
  stationStatus,
  toggleDevice,
  toggleConveyor,
}) => {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center bg-gray-700 p-4">
      <h2 className="text-xl font-bold mb-4">Панель управления</h2>
      <p className="mb-4">
        Статус станции:{" "}
        <span className={stationStatus === "Активна" ? "text-green-500" : "text-red-500"}>
          {stationStatus}
        </span>
      </p>

      {devices.map((device) => (
        <div key={device.id} className="flex items-center justify-between w-full mb-2 p-2 bg-gray-600 rounded">
          <span>{device.name}</span>
          <button
            data-testid={`device-${device.id}-button`}
            onClick={() => toggleDevice(device.id, device.name)}
            className={`px-2 py-1 text-white rounded-md ${
              device.status === "on" ? "bg-green-500" : device.status === "Завершено" ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            {device.status === "on" ? "Выключить" : device.status === "Завершено" ? "Завершено" : "Включить"}
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4 mb-2">Конвейеры</h2>

      {conveyors.map((conveyor) => (
        <div key={conveyor.id} className="flex items-center justify-between w-full mb-2 p-2 bg-gray-600 rounded">
          <span>{conveyor.name}</span>
          <button
            data-testid={`conveyor-${conveyor.id}-button`}
            onClick={() => toggleConveyor(conveyor.id)}
            className={`px-2 py-1 text-white rounded-md ${
              conveyor.status === "on" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {conveyor.status === "on" ? "Выключить" : "Включить"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
