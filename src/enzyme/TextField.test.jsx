import React from 'react';
import { mount } from 'enzyme';

it('should call the change handler when entering text', () => {
    const mockChangeHandler = jest.fn();
    const component = mount(
        <input
            data-testid="textfield"
            onChange={(e) => mockChangeHandler(e.target.value)}
        />
    );

    component.simulate('change', { target: { value: 'Hello, World!' } });
    expect(mockChangeHandler).toHaveBeenCalledWith('Hello, World!');
});