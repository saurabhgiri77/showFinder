import { FC, memo } from "react";

type Props = {};

const App: FC<Props> = (props) => {
  return <div className="bg-red-500">Hello</div>;
};

App.defaultProps = {};

export default memo(App);
