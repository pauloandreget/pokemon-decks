import { runSaga } from 'redux-saga';
import CardsApi from '@api/cards';
import { routines } from '@store/cards/actions';
import { listWorker } from '@store/cards/saga';

describe('cards saga', () => {
  it('should call api and dispatch success list action', async () => {
    const listSpy = jest
      .spyOn(CardsApi, 'list')
      .mockImplementation(() => Promise.resolve({ data: { cards: 'cards array' } }));
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      listWorker
    );
    expect(listSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: routines.list.REQUEST },
      { type: routines.list.SUCCESS, payload: 'cards array' },
      { type: routines.list.FULFILL },
    ]);
    listSpy.mockClear();
  });
  it('should call api and dispatch failure list action', async () => {
    const listSpy = jest
      .spyOn(CardsApi, 'list')
      .mockImplementation(() => Promise.reject(Error('error value')));
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      listWorker
    );
    expect(listSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: routines.list.REQUEST },
      { type: routines.list.FAILURE, error: true, payload: Error('error value') },
      { type: routines.list.FULFILL },
    ]);
    listSpy.mockClear();
  });
});
