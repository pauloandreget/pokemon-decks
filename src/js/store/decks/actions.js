import { createRoutine } from 'redux-saga-routines';

export const routines = {
  create: createRoutine('CREATE_DECK'),
  update: createRoutine('UPDATE_DECK'),
  remove: createRoutine('REMOVE_DECK'),
};

export const create = (data) => routines.create({ data });
export const update = (id, data) => routines.update({ id, data });
export const remove = (id) => routines.remove({ id });
