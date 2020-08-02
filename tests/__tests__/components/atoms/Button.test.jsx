import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '@atoms/Button';

describe('Button component', () => {
  it('should fire button click', () => {
    const onClickMock = jest.fn();
    const utils = render(<Button onClick={onClickMock}>button text</Button>);
    const button = utils.getByText('button text');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
    expect(button.textContent).toBe('button text');
  });
});
