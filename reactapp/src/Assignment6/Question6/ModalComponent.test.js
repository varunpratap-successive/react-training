import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ModalComponent from "./ModalComponent";

test("Check If Everything working", () => {
  render(<ModalComponent />);
  const open = screen.getByText("Open modal");
  expect(open).toBeInTheDocument();
  fireEvent.click(open);
  const close = screen.getByText("Close modal");
  expect(close).toBeInTheDocument();
  fireEvent.click(close);
  expect(screen.queryByText("Content of Modal")).not.toBeInTheDocument();
});
