import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import { Device, Conveyor } from "../config/state";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

const mockDevices: Device[] = [{ id: 1, name: "Дробилка", status: "off" }];
const mockConveyors: Conveyor[] = [{ id: 1, name: "Конвейер 1", status: "off", direction: "right" }];

test("Layout рендерит устройства", () => {
  render(<Layout devices={mockDevices} conveyors={mockConveyors} />);
  expect(screen.getByText("Дробилка")).toBeInTheDocument();
});
