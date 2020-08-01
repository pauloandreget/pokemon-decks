import { Map } from 'immutable';
import { IDLE, FAILED, SAVED } from '@shared/constants';
import { routines } from './actions';

const initState = new Map({
  loading: false,
  error: null,
  cards: [],
  status: IDLE,
});

const cardsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case routines.list.TRIGGER:
      return state.set('loading', true).set('error', null);
    case routines.list.SUCCESS:
      return state.set('cards', payload).set('status', SAVED);
    case routines.list.FAILURE:
      return state.set('status', FAILED).set('error', payload);
    case routines.list.FULFILL:
      return state.set('status', IDLE).set('loading', false);
    default:
      return state;
  }
};

export default cardsReducer;
