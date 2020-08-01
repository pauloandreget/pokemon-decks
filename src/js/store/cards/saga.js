import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import CardsApi from '@api/cards';
import { routines } from './actions';

export function* listWorker() {
  try {
    yield put(routines.list.request());
    const response = yield call(CardsApi.list);
    yield put(routines.list.success(response.data.cards));
  } catch (error) {
    yield put(routines.list.failure(error));
  } finally {
    yield put(routines.list.fulfill());
  }
}

export function* listRequest() {
  yield takeLatest(routines.list.TRIGGER, listWorker);
}

export default function* rootSaga() {
  yield all([fork(listRequest)]);
}
