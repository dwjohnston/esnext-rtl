import React from 'react';
import { mount } from 'enzyme';

it('should call the click handler', () => {
    const mockClickHandler = jest.fn();

    const component = mount(
        <button
            data-testid="button"
            onClick={mockClickHandler}
        />
    );

    component.simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();
});