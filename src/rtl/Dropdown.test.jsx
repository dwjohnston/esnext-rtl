import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('should select the correct items', () => {
    const mockChangeHandler = jest.fn();
    render(
        <select
            data-testid="select"
            onChange={(e) => mockChangeHandler(e.target.value)}
        >
            <option data-testid="val1" value="1">
                A
            </option>
            <option data-testid="val2" value="2">
                B
            </option>
        </select >
    );

    userEvent.selectOptions(screen.getByRole('combobox'), '1');
    // OR, as a recommended escape hatch: 
    // userEvent.selectOptions(screen.getByTestId('select'), '1');
    expect(mockChangeHandler).toHaveBeenCalledWith('1')
});
