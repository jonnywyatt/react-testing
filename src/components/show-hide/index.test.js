import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShowHide } from './index';
describe('ShowHide', () => {
  it('should show children when button is clicked', async() => {
    // this is needed to create user events like click etc
    const user = userEvent.setup();

    // Now, build up your test like this:
    // 1. render the component
    // 2. find the 'Show' button and click it
    // 3. find the children and check if they are visible
  });
})
