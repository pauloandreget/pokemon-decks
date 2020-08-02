import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '@atoms/Input';

describe('Input component', () => {
  it('should change input normal value', () => {
    const onChangeMock = jest.fn();
    const utils = render(
      <Input id="field_id" name="field_name" label="input label" onChange={onChangeMock} />
    );
    const input = utils.getByLabelText('input label');
    fireEvent.change(input, { target: { value: 'typed value' } });
    expect(onChangeMock).toHaveBeenCalled();
    expect(input.value).toBe('typed value');
  });
});
