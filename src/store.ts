import { Reducer } from "redux";
import { applyMiddleware, createStore } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { Show } from "./models/show";
import { rootSaga, sagaMiddleware } from "./sagas";

export type State = {
  shows: { [q: string]: Show[] };
  showsQuery: string;
};

const initialState: State = {
  shows: {},
  showsQuery: "",
};

export const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWS_FETCH:
      return { ...state, showsQuery: action.payload, shows: [] };
    case SHOWS_FETCHED:
      const { query, shows } = action.payload;
      return { ...state, shows: { ...state.shows, [query]: shows } };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
