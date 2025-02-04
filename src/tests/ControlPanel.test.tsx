import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ControlPanel from "../components/ControlPanel";
import { Device, Conveyor } from "../config/state";
import "@testing-library/jest-dom";
import { expect, test, afterEach, vi } from "vitest";

afterEach(cleanup);

const mockDevices: Device[] = [{ id: 1, name: "Дробилка", status: "off" }];
const mockConveyors: Conveyor[] = [{ id: 1, name: "Конвейер 1", status: "off", direction: "right" }];

const toggleDeviceMock = vi.fn();
const toggleConveyorMock = vi.fn();

test("Кнопка включает устройство", () => {
  render(
    <ControlPanel
      devices={mockDevices}
      conveyors={mockConveyors}
      stationStatus="Неактивна"
      toggleDevice={toggleDeviceMock}
      toggleConveyor={toggleConveyorMock}
    />
  );

  const deviceButton = screen.getByTestId("device-1-button");
  fireEvent.click(deviceButton);

  expect(toggleDeviceMock).toHaveBeenCalledWith(1, "Дробилка");
});

test("Кнопка включает конвейер", () => {
  render(
    <ControlPanel
      devices={mockDevices}
      conveyors={mockConveyors}
      stationStatus="Неактивна"
      toggleDevice={toggleDeviceMock}
      toggleConveyor={toggleConveyorMock}
    />
  );

  const conveyorButton = screen.getByTestId("conveyor-1-button");
  fireEvent.click(conveyorButton);

  expect(toggleConveyorMock).toHaveBeenCalledWith(1);
});
