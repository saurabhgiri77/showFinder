import { FC, memo } from "react";
import ShowList from "./components/ShowList";

type Props = {};

const App: FC<Props> = (props) => {
  return (
    <div className="bg-red-500">
      <ShowList />
    </div>
  );
};

App.defaultProps = {};

export default memo(App);
