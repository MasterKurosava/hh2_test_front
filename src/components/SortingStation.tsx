import { useState, useEffect, useCallback, useReducer } from "react";
import { initialState, reducer, Device, Conveyor } from "../config/state";
import Layout from "./Layout";
import ControlPanel from "./ControlPanel";
import NotificationList from "./Notification";

export const SortingStation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stationStatus, setStationStatus] = useState("Неактивна");
  const deviceTimers = new Map<number, NodeJS.Timeout>();

  useEffect(() => {
    const isActive = state.devices.some((device: Device) => device.status === "on") ||
                     state.conveyors.some((conv: Conveyor) => conv.status === "on");
    setStationStatus(isActive ? "Активна" : "Неактивна");
  }, [state.devices, state.conveyors]);

  const toggleDevice = useCallback((id: number, name: string) => {
    const device = state.devices.find((d) => d.id === id);
    if (!device) return;

    if (device.status === "on") {
      if (deviceTimers.has(id)) {
        clearTimeout(deviceTimers.get(id));
        deviceTimers.delete(id);
      }
      dispatch({ type: "TOGGLE_DEVICE", id });
      console.log(`Устройство ${name} выключено`);
    } else {
      dispatch({ type: "TOGGLE_DEVICE", id });
      console.log(`Устройство ${name} включено`);

      const timer = setTimeout(() => {
        dispatch({ type: "COMPLETE_DEVICE", id, name });
        deviceTimers.delete(id);
      }, 5000);

      deviceTimers.set(id, timer);
    }
  }, [state.devices]);

  const toggleConveyor = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_CONVEYOR", id });
    console.log(`Конвейер ${id} переключен`)
  }, []);

  return (
    <div className="flex w-full h-screen bg-gray-900 text-white relative">
      <Layout devices={state.devices} conveyors={state.conveyors} />
      <ControlPanel
        devices={state.devices}
        conveyors={state.conveyors}
        stationStatus={stationStatus}
        toggleDevice={toggleDevice}
        toggleConveyor={toggleConveyor}
      />
      <NotificationList notifications={state.notifications} />
    </div>
  );
};

export default SortingStation;
