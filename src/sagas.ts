import { showsFetchedAction, SHOWS_FETCH } from "./actions";
import { getShowsApi } from "./components/api";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { AnyAction } from "redux";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(500);
  if (!action.payload) {
    return;
  }
  const query = action.payload;
  const data = yield call(getShowsApi, query);
  yield put(showsFetchedAction(query, data));
}

export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, fetchShowsSaga);
}
