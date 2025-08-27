import { Link } from "react-router-dom";
import { NAVMENU } from "../constants";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <header className=" h-24 sticky   left-0 right-0 top-0 z-10 bg-[rgba(255, 119, 0, 0.35)]">
        <div className="h-24 shadow-glass border-white  backdrop-blur-xs flex justify-between items-center px-5">
          <span>
            {" "}
            <img src={logo} alt="" className="w-60 h-52 object-contain" />{" "}
          </span>

          <nav className="w-1/3 flex justify-evenly items-center">
            {NAVMENU.map((page) => (
              <Link
                className="text-black font-medium font-sans text-xl transition-border transition-all duration-300 group-hover:w-full group-hover:left-0"
                to={page}
              >
                {page}
              </Link>
            ))}
          </nav>
          <span>
            <p className="text-2xl font-medium font-sans">info@gmail.com</p>
          </span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
