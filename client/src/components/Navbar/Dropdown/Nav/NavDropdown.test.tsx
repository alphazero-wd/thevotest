import { fireEvent, render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import { BrowserRouter } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";

test("should open dropdown menu", async () => {
  render(
    <BrowserRouter>
      <NavDropdown />
    </BrowserRouter>
  );
  const dropdownBtn = screen.getByRole("button", { name: /avatar/i });

  // Events and assertions...
  fireEvent.click(dropdownBtn);
  const menu = await screen.findByRole("menu");
  expect(menu).toBeDefined();
});
