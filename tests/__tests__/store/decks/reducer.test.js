import { Map } from 'immutable';
import reducer from '@store/decks/reducer';
import { routines } from '@store/decks/actions';

let expectState;

const initial = new Map({
  decks: [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'lipsum' },
  ],
});

describe('cards reducer', () => {
  beforeEach(() => {
    expectState = new Map({
      decks: [],
    });
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectState);
  });
  it('should return the state after trigger create action', () => {
    expectState = expectState.set('decks', [
      { id: 2, foo: 'lipsum' },
      { id: 1, foo: 'bar' },
      { id: 3, foo: 'xpto' },
    ]);
    expect(
      reducer(initial, {
        type: routines.create.TRIGGER,
        payload: { data: { foo: 'xpto' } },
      })
    ).toEqual(expectState);
  });
  it('should return the state after trigger update action', () => {
    expectState = expectState.set('decks', [
      { id: 2, foo: 'lipsum' },
      { id: 1, foo: 'xpto' },
    ]);
    expect(
      reducer(initial, {
        type: routines.update.TRIGGER,
        payload: { id: 1, data: { foo: 'xpto' } },
      })
    ).toEqual(expectState);
  });
  it('should return the state after trigger remove action', () => {
    expectState = expectState.set('decks', [{ id: 2, foo: 'lipsum' }]);
    expect(
      reducer(initial, {
        type: routines.remove.TRIGGER,
        payload: { id: 1 },
      })
    ).toEqual(expectState);
  });
});
