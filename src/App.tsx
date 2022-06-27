import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import ShowList from "./components/ShowList";

type Props = {};

const App: FC<Props> = (props) => {
  return (
    <div className="bg-red-500">
      <Routes>
        <Route index element={<ShowList />} />
        <Route path="/shows/:showId" element={<ShowDetail />} />
      </Routes>
    </div>
  );
};

App.defaultProps = {};

export default memo(App);
