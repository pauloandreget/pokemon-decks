import { routines, create, update, remove } from '@store/decks/actions';

describe('decks actions', () => {
  it('should create an action to trigger create', () => {
    expect(create('data object')).toEqual({
      type: routines.create.TRIGGER,
      payload: { data: 'data object' },
    });
  });
  it('should create an action to trigger update', () => {
    expect(update('integer value', 'data object')).toEqual({
      type: routines.update.TRIGGER,
      payload: { id: 'integer value', data: 'data object' },
    });
  });
  it('should create an action to trigger remove', () => {
    expect(remove('integer value')).toEqual({
      type: routines.remove.TRIGGER,
      payload: { id: 'integer value' },
    });
  });
});
