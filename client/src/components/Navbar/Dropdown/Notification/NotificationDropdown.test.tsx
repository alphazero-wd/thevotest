import { fireEvent, render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import { BrowserRouter } from "react-router-dom";
import { NotificationDropdown } from "./NotificationDropdown";

test("should open dropdown menu", async () => {
  render(<NotificationDropdown />);
  const dropdownBtn = screen.getByTestId("notification-dropdown-btn");

  // Events and assertions...
  fireEvent.click(dropdownBtn);
  const menu = await screen.findByRole("menu");
  expect(menu).toBeDefined();
});
