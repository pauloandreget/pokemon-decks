import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '@molecules/Card';

describe('Card component', () => {
  it('should fire card click', () => {
    const onSelectMock = jest.fn();
    const utils = render(<Card data={{ imageUrl: 'image url' }} onSelect={onSelectMock} />);
    const card = utils.getByRole('presentation');
    fireEvent.click(card);
    expect(onSelectMock).toHaveBeenCalled();
  });
  it('should not fire card click due to disabled props', () => {
    const onSelectMock = jest.fn();
    const utils = render(
      <Card data={{ imageUrl: 'image url' }} onSelect={onSelectMock} disabled />
    );
    const card = utils.getByRole('presentation');
    fireEvent.click(card);
    expect(onSelectMock).not.toHaveBeenCalled();
  });
  it('should render card due to empty data', () => {
    const utils = render(<Card />);
    expect(utils.container.firstChild).toBeNull();
  });
});
