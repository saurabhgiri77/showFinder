import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../actions";
import { Show } from "../models/show";
import { showSelector } from "../selectors";
import { State } from "../store";

type Props = {
  shows: Show[];
  fetchShows: () => void;
};

const ShowList: FC<Props> = ({ shows, fetchShows }) => {
  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <div>
      {shows.map((s) => (
        <div>{s.name}</div>
      ))}
    </div>
  );
};

ShowList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  shows: showSelector(s),
});

const mapDispatchToProps = {
  fetchShows: showsFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));
