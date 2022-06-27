import { FC, memo } from "react";
import { connect } from "react-redux";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { Show } from "../models/show";
import { showsEntitiesSelector } from "../selectors";
import { State } from "../store";

type Props = {
  showsEntities: any;
} & WithRouterProps;

const ShowDetail: FC<Props> = ({ params, showsEntities }) => {
  const show: Show = showsEntities[+params.showId];
  return (
    <div className="flex items-stretch space-x-3 cursor-pointer bg-blue-500 rounded-lg text-white border-4 border-black">
      <img
        className="w-40"
        src={
          show.image?.medium ||
          "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
        }
      />
      <div className="space-y-2">
        <h3 className="text-2xl text-center font-semibold">{show.name}</h3>
        <p>{show.summary}</p>
      </div>
    </div>
  );
};

ShowDetail.defaultProps = {};

const mapStateToProps = (s: State) => ({
  showsEntities: showsEntitiesSelector(s),
});

export default connect(mapStateToProps)(withRouter(memo(ShowDetail)));
