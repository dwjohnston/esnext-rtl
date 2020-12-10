import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {foo} from "foo";

it('should call the click handler', () => {
    const mockClickHandler = jest.fn();
    render(<button
            data-testid="button"
            onClick={mockClickHandler}
        >hello</button>
    );

    console.log(foo);
    userEvent.click(screen.getByText('aaaa'));
    // OR, as a recommended escape hatch: 
    // userEvent.click(screen.getByTestId('button'));
    expect(mockClickHandler).toHaveBeenCalled();
});