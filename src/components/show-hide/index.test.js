import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShowHide } from "./index";
describe("ShowHide", () => {
  it("should show children when button is clicked", async () => {
    // this is needed to create user events like click etc
    const user = userEvent.setup();

    // Now, build up your test like this:
    // 1. render the component
    // 2. find the 'Show' button
    // 3. click the Show button
    // 4. find the text label
    // 5. assert that the text label is visible
  });
});
