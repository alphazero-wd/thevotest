import { fireEvent, render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import { MessagesDropdown } from "./MessagesDropdown";

test("should open dropdown menu", async () => {
  render(<MessagesDropdown />);
  const dropdownBtn = screen.getByTestId("message-dropdown-btn");

  // Events and assertions...
  fireEvent.click(dropdownBtn);
  const menu = await screen.findByRole("menu");
  expect(menu).toBeDefined();
});
