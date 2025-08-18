import { Route, Routes } from "react-router-dom";
import type { ROUTE } from "../../interfaces";
import Landing from "../../pages/Home/Landing";

const Routes_ = () => {
  const routes: ROUTE[] = [{ path: "/", element: <Landing /> }];

  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path}></Route>
        ))}
      </Routes>
    </>
  );
};

export default Routes_;
