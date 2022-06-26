import { combineReducers, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootSaga, sagaMiddleware } from "./sagas";
import {
  initialShowState,
  showReducer,
  ShowState,
} from "./subReducers/showReducer";

export type State = {
  shows: ShowState;
};

const initialState: State = {
  shows: initialShowState,
};

export const reducer: Reducer<State> = combineReducers({
  shows: showReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
