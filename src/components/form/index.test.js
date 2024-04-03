import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./index";

describe("Form", () => {
  it("should call the onFormSubmitted handler with the name the user entered, when the form is submitted", async () => {
    // this is needed to create user events like click etc
    const user = userEvent.setup();

    // Now, build up your test like this:
    // 1. create a mock function that will be passed to the component as a prop - const submit = jest.fn()
    // 2. render the component - <Form onFormSubmitted={submit} />
    // 3. find the input
    // 4. type a name into it using user.type
    // 5. find the 'Submit' button
    // 6. click the Submit button
    // 3. assert that your mock function from step 1 should have been called with the name you typed in step 3
  });
});
