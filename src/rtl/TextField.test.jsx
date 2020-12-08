import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('should call the change handler when entering text', () => {
    const mockChangeHandler = jest.fn();
    render(
        <input
            data-testid="textfield"
            onChange={(e) => mockChangeHandler(e.target.value)}
        />
    );

    /**
     * Add your event invocation and expectation below
     */
});