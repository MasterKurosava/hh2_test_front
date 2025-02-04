import { render, screen, cleanup } from "@testing-library/react";
import SortingStation from "../components/SortingStation";
import "@testing-library/jest-dom";
import { expect, test, afterEach } from "vitest";

afterEach(cleanup);

test("Станция сортировки рендерится", () => {
  render(<SortingStation />);
  expect(screen.getByText(/Статус станции:/i)).toBeInTheDocument();
});
