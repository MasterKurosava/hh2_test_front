export interface Device {
    id: number;
    name: string;
    status: "off" | "on" | "Завершено";
  }
  
export interface Conveyor {
    id: number;
    name: string;
    status: "off" | "on";
    direction: "left" | "right" | "up" | "down";
}
  
export interface State {
    devices: Device[];
    conveyors: Conveyor[];
    notifications: string[];
}
  
type Action =
    | { type: "TOGGLE_DEVICE"; id: number }
    | { type: "COMPLETE_DEVICE"; id: number; name: string }
    | { type: "TOGGLE_CONVEYOR"; id: number };
  
export const initialState: State = {
    devices: [
      { id: 1, name: "Дробилка", status: "off" },
      { id: 2, name: "Пресс", status: "off" },
      { id: 3, name: "Печь", status: "off" },
    ],
    conveyors: [
      { id: 1, name: "Конвейер 1", status: "off", direction: "right" },
      { id: 2, name: "Конвейер 2", status: "off", direction: "right" },
      { id: 3, name: "Конвейер 3", status: "off", direction: "down" },
    ],
    notifications: [],
};
  
export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "TOGGLE_DEVICE":
        return {
          ...state,
          devices: state.devices.map((device) =>
            device.id === action.id ? { ...device, status: device.status === "off" ? "on" : "off" } : device
          ),
        };
      case "COMPLETE_DEVICE":
        return {
          ...state,
          devices: state.devices.map((device) =>
            device.id === action.id ? { ...device, status: "Завершено" } : device
          ),
          notifications: [...state.notifications.slice(-1), `Устройство ${action.name} завершило работу`],
        };
      case "TOGGLE_CONVEYOR":
        return {
          ...state,
          conveyors: state.conveyors.map((conveyor) =>
            conveyor.id === action.id ? { ...conveyor, status: conveyor.status === "off" ? "on" : "off" } : conveyor
          ),
        };
      default:
        return state;
    }
};
  