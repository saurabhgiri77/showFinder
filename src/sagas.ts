import { showsFetchedAction, SHOWS_FETCH } from "./actions";
import { getShowsApi } from "./components/api";
import { call, put, takeLeading } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchShowsSaga(): Generator<any, any, any> {
  const data = yield call(getShowsApi);
  const action = showsFetchedAction(data);
  yield put(action);
}

export function* rootSaga() {
  yield takeLeading(SHOWS_FETCH, fetchShowsSaga);
}
