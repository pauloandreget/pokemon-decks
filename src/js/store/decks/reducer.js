import { Map, List } from 'immutable';
import { routines } from './actions';

const initState = new Map({
  decks: [],
});

const decksReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case routines.create.TRIGGER:
      return state.set('decks', (state.get('decks') || []).concat(payload.data));
    case routines.update.TRIGGER: {
      const decks = List(state.get('decks') || []);
      return state.set(
        'decks',
        decks
          .reduce((prev, deck) => {
            if (deck.id !== payload.id) {
              prev.push(deck);
            }
            return prev;
          }, [])
          .concat(payload.data)
      );
    }
    case routines.remove.TRIGGER: {
      const decks = List(state.get('decks') || []);
      return state.set(
        'decks',
        decks.reduce((prev, deck) => {
          if (deck.service.id !== payload.id) {
            prev.push(deck);
          }
          return prev;
        }, [])
      );
    }
    default:
      return state;
  }
};

export default decksReducer;
