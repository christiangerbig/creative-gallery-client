import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders creative gallery link", () => {
  render(<App />);
  const linkElement = screen.getByText(/creative gallery/i);
  expect(linkElement).toBeInTheDocument();
});
