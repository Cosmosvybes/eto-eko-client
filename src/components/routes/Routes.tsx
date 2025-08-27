import { Route, Routes } from "react-router-dom";
import type { ROUTE } from "../../interfaces";
import Landing from "../../pages/Home/Landing";
import About from "../../pages/About/About";
import Navbar from "../navs/Navbar";

const Routes_ = () => {
  const routes: ROUTE[] = [
    { path: "/Home", element: <Landing /> },
    { path: "/About us", element: <About /> },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path}></Route>
        ))}
      </Routes>
    </>
  );
};

export default Routes_;
