import { createRoutine } from 'redux-saga-routines';

export const routines = {
  list: createRoutine('LIST_CARDS'),
};

export const list = () => routines.list();
