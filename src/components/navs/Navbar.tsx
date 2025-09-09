import { Link } from "react-router-dom";
import { NAVMENU } from "../constants";
import logo from "../../assets/logo.png";
import { RiMenu2Fill, RiTwitterXFill } from "react-icons/ri";
import { useState } from "react";
import { MdCloseFullscreen, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Dropdown from "./dropdown/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const handleOpenNavMenu = () => setIsOpen(!isOpen);

  const handlIsOpenDropDown = () => setIsOpenDropDown(!isOpenDropDown);
  const [MENU] = useState([
    {
      header: "Events",
    },
    {
      header: "Quick links",
      children: [
        { title: "About Us", link: "/about-us" },
        { title: "Our Services", link: "/our-services" },
        { title: "Testimonials", link: "/testimonials" },
        // { title: "Our Team", link: "/our-team" },
        // { title: "Offices", link: "/our-offices" },
        // { title: "Study Destinations", link: "study-destinations" },
      ],
    },
  ]);
  return (
    <>
      <header className="lg:h-auto  lg:p-2 sm:h-auto md:h-auto  lg:sticky sticky max-sm:sticky max-md:sticky max-md:left-0 max-md:right-0  top-0 z-50 bg-[rgba(255, 119, 0, 0.35)]">
        <div className="max-md:w-full  border-none backdrop-blur-xs flex justify-between items-center lg:px-5 max-md:px-0 max-sm:px-0">
          <span>
            {" "}
            <img
              onClick={() => location.assign("/")}
              src={logo}
              alt=""
              className="w-60 lg:h-32 object-contain max-sm:w-full max-sm:h-auto"
            />{" "}
          </span>

          <nav className="w-1/3 md:w-3/4 flex justify-center lg:gap-4 items-center lg:flex  max-md:hidden sm:hidden">
            {NAVMENU.map(({ name, path }) => (
              <Link
                key={name}
                className="text-black lg:p-2 lg:w-auto text-center font-medium lg:rounded-lg font-sans lg:text-[16px] hover:bg-[#074941] hover:text-white  transition duration-400 group-hover:w-full group-hover:left-0"
                to={path!}
              >
                {name}
              </Link>
            ))}
          </nav>
          <span>
            <div className="w-20  max-sm:hidden max-md:hidden flex-col items-center justify-start">
              <MdEmail
                className={`text-4xl text-[#074941]  transition duration-500  max-sm:hidden max-md:hidden`}
                // onClick={handleOpenNavMenu}
              />
              <p className="text-xs text-[#074941]">email us</p>
            </div>
          </span>

          <div className="flex justify-end items-end  ">
            <div className="w-20 hidden max-sm:flex max-md:flex flex-col items-center justify-start">
              <MdEmail
                className={`text-2xl text-[#074941]  transition duration-500 hidden max-sm:block max-md:block`}
                // onClick={handleOpenNavMenu}
              />
              <p className="text-xs text-[#074941]">email us</p>
            </div>

            <div className="w-20 hidden max-sm:flex max-md:flex flex-col items-center justify-start">
              <RiMenu2Fill
                className={`text-2xl text-[#074941]  transition duration-500 hidden max-sm:block max-md:block`}
                onClick={handleOpenNavMenu}
              />
              <p className="text-xs text-[#074941]">menu</p>
            </div>
          </div>
        </div>

        <div
          className={`fixed bottom-0 top-0 w-full flex flex-col justify-start  items-start left-0 h-auto max-md:h-screen right-0 ${
            isOpen
              ? "visible opacity-100 scale-3d"
              : "invisible duration-1000  opacity-0 scale-50 "
          } transition duration-400 ${
            isOpen ? "delay-200" : "delay-800"
          } bottom-0 bg-amber-600`}
        >
          <div
            className={` py-20  ${
              isOpen
                ? " delay-500 opacity-100 scale-3d visible"
                : " delay-500 opacity-0 duration-1000 invisible scale-0"
            }  w-full transition duration-600  gap-3 flex justify-center items-center flex-col`}
          >
            {MENU.map(({ header, children }) => (
              <Dropdown
                handleOpenCloseNav={handleOpenNavMenu}
                isClosedNav={isOpen}
                key={header}
                header={header}
                children={children}
                isOpen={isOpenDropDown}
                handleOpenDropDown={handlIsOpenDropDown}
              />
            ))}
          </div>
          <hr className="border-dashed border-white mt-2 w-full border-t" />
          <MdCloseFullscreen
            className={`text-4xl ${
              !isOpen
                ? "delay-700 opacity-0 transform-3d scale-0"
                : "delay-500 duration-1000 opacity-100 transform-3d"
            }  absolute top-4 right-4  transition duration-700 text-[#074941] hidden max-sm:block max-md:block`}
            onClick={handleOpenNavMenu}
          />

          <div
            className={` w-full flex flex-col justify-center items-center px-4  ${
              isOpen
                ? "delay-800 opacity-100 h-[250px] max-md:h-[300px] visible"
                : "delay-100 opacity-0 invisible h-0"
            } transition-all duration-800   absolute bottom-0 bg-[#074941]`}
          >
            <div className="footer-img-container  w-1/4 h-auto p-10   max-sm:w-full max-md:w-full max-sm:p-2  max-md:p-5">
              <div className=" w-full flex  items-end justify-center max-sm:justify-start gap-4  max-sm:gap-2">
                <FaLocationDot className="text-6xl text-white max-sm:text-5xl" />
                <p className="text-white font-sans max-sm:text-sm ">
                  6th Floor, Park Royal, 2 Lake Drive, First Central 200 Abuja,
                  NW10 7FQ, Nigeria.{" "}
                </p>
              </div>
            </div>

            {/*  */}

            <div className="w-1/4 max-sm:w-full max-md:w-full flex justify-center items-end p-10 py-4 max-sm:p-2">
              <div className=" w-full flex  items-center justify-center gap-4 max-sm:justify-start  max-md:justify-start max-sm:-ml-2 max-md:-ml-10 ">
                <HiMailOpen className="text-6xl text-white max-sm:text-4xl" />
                <p className="text-white font-sans">info@etoeko.com.uk</p>
              </div>
            </div>

            {/*  */}

            <hr className="border-dashed border-white mt-2 w-full border-t" />
            <div className="w-1/4 max-sm:w-full max-md:w-full flex-col  flex justify-center items-start gap-5 p-10 max-sm:p-0 py-4 max-sm:mt-4">
              <div className=" w-full flex  items-center justify-start gap-6 max-sm:gap-3 max-md:-ml-5 max-sm:ml-2 ">
                <FaFacebook className="text-3xl text-white" />
                <FaLinkedin className="text-3xl text-white" />
                <FaInstagram className="text-3xl text-white" />
                <RiTwitterXFill className="text-3xl text-white" />
                <FaYoutube className="text-3xl text-white" />
              </div>
              <p className="text-sm font-thin ml-3 text-white">
                Connect with us
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
