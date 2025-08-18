import { Link } from "react-router-dom";
import { NAVMENU } from "../constants";

const Navbar = () => {
  return (
    <>
      <nav className=" h-24 sticky  left-0 right-0 top-0 z-10">
        <div className="h-24 shadow-glass border-white  backdrop-blur-xs flex justify-between items-center px-5">
          <h1>Logo</h1>

          <div className="w-1/3 flex justify-evenly items-center">
            {NAVMENU.map((_) => (
              <Link
                className="text-black font-normal font-sans text-2xl transition-border"
                to={_}
              >
                {_}
              </Link>
            ))}
          </div>
          <span>
            <p className="text-2xl font-normal font-sans">info@gmail.com</p>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
