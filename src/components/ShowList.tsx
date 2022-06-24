import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../actions";
import { Show } from "../models/show";
import { showSelector, showsQuerySelector } from "../selectors";
import { State } from "../store";
import ShowRow from "./ShowRow";

type Props = {
  query: string;
  shows: Show[];
  fetchShows: (query: string) => void;
};

const ShowList: FC<Props> = ({ query, shows, fetchShows }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };

  return (
    <div className="space-y-6 py-6 px-10">
      <input
        onChange={handleChange}
        value={query}
        className="w-60 h-8 rounded-lg border-2 border-black"
        placeholder="search"
      />
      <div className="space-y-2 ">
        {shows.map((s) => (
          <ShowRow key={s.id} show={s} />
        ))}
      </div>
    </div>
  );
};

ShowList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  shows: showSelector(s),
  query: showsQuerySelector(s),
});

const mapDispatchToProps = {
  fetchShows: showsFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));
