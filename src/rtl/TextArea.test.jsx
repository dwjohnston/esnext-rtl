import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('should display the text entered', () => {
    const mockChangeHandler = jest.fn();
    render(
        <textarea
            data-testid="textarea"
            onChange={(e) => mockChangeHandler(e.target.value)}
        />
    );

    /**
     * Add your event invocation and expectation below
     */
});