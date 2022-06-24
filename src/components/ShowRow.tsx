import { FC, memo } from "react";
import { Show } from "../models/show";

type Props = {
  show: Show;
};

const ShowRow: FC<Props> = ({ show }) => {
  return (
    <div className="flex items-stretch space-x-3 bg-blue-500 rounded-lg text-white border-4 border-black">
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

ShowRow.defaultProps = {};

export default memo(ShowRow);
