import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED } from "../actions";
import { Show } from "../models/show";

export type ShowState = {
  entities: { [id: number]: Show[] };
  againstQuery: { [q: string]: number[] };
  query: string;
};

export const initialShowState: ShowState = {
  entities: {},
  againstQuery: {},
  query: "",
};

export const showReducer: Reducer<ShowState> = (
  state = initialShowState,
  action
) => {
  switch (action.type) {
    case SHOWS_FETCH:
      return { ...state, query: action.payload, entities: [] };
    case SHOWS_FETCHED:
      const { query, shows } = action.payload as {
        query: string;
        shows: Show[];
      };

      const showEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showEntity]);
      const normalizedShows = normalized.entities.shows;

      const ids = shows.map((s) => s.id);

      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
      };
    default:
      return state;
  }
};
