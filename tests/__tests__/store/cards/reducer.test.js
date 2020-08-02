import { Map } from 'immutable';
import reducer from '@store/cards/reducer';
import { routines } from '@store/cards/actions';

let expectState;

describe('cards reducer', () => {
  beforeEach(() => {
    expectState = new Map({
      loading: false,
      error: null,
      cards: null,
      status: 'idle',
    });
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectState);
  });
  it('should return the state after trigger list action', () => {
    expectState = expectState.set('loading', true);
    expect(
      reducer(undefined, {
        type: routines.list.TRIGGER,
      })
    ).toEqual(expectState);
  });
  it('should return the state after success list action', () => {
    expectState = expectState.set('cards', 'cards array').set('status', 'saved');
    expect(
      reducer(undefined, {
        type: routines.list.SUCCESS,
        payload: 'cards array',
      })
    ).toEqual(expectState);
  });
  it('should return the state after failure list action', () => {
    expectState = expectState.set('error', 'error object').set('status', 'failed');
    expect(
      reducer(undefined, {
        type: routines.list.FAILURE,
        payload: 'error object',
      })
    ).toEqual(expectState);
  });
  it('should return the state after fulfill list action', () => {
    expectState = expectState.set('loading', false);
    expect(
      reducer(undefined, {
        type: routines.list.FULFILL,
      })
    ).toEqual(expectState);
  });
});
