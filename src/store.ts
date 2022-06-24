import { AnyAction, applyMiddleware, createStore } from "redux";
import { SHOWS_FETCHED } from "./actions";
import { Show } from "./models/show";
import { rootSaga, sagaMiddleware } from "./sagas";

export type State = {
  shows: Show[];
};

const initialState: State = {
  shows: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOWS_FETCHED:
      return { ...state, shows: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
