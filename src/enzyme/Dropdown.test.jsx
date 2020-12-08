import React from 'react';
import { mount } from 'enzyme';

it('should select the correct items Enzyme', () => {
    const mockChangeHandler = jest.fn();
    const component = mount(
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

    component.simulate('change', {
        target: { value: '1', name: '1' }
    });

    expect(mockChangeHandler).toHaveBeenCalledWith('1')
});
