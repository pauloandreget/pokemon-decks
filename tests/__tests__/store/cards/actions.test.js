import { routines, list } from '@store/cards/actions';

describe('cards actions', () => {
  it('should create an action to trigger list', () => {
    expect(list()).toEqual({
      type: routines.list.TRIGGER,
    });
  });
});
