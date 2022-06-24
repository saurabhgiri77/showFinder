import { State } from "./store";

export const showSelector = (s: State) => s.shows[s.showsQuery] || [];

export const showsQuerySelector = (s: State) => s.showsQuery;
