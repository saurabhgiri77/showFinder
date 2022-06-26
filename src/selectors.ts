import { createSelector } from "reselect";
import { State } from "./store";

export const showStateSelector = (s: State) => s.shows;

export const showsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);

export const showsAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);

export const showsEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);

export const showIdSelector = createSelector(
  showsQuerySelector,
  showsAgainstQuerySelector,
  (query, againstQuery) => againstQuery[query] || []
);

export const showSelector = createSelector(
  showIdSelector,
  showsEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);
