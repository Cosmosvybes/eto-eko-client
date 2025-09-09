import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import glassHouse from "../../assets/glasshouse.png";
import { useState } from "react";

import { FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const Footer = () => {
  const [subMenus] = useState([
    {
      id: 1,
      header: "Services",
      children: [
        "Education Consultancy",
        "Overseas Placement",
        "Professional Courses",
      ],
    },
    {
      id: 1,
      header: "Support",
      children: [
        "Help center",
        "Sales center",
        "Ticket support",
        "FAQs",
        "Contact us",
      ],
    },
    {
      id: 1,
      header: "Company",
      children: [
        "About us",
        "Our Team",
        "Careers",
        "Articles and News",
        "Legal Notice",
      ],
    },
  ]);

  return (
    <>
      <footer className="h-[90rem] max-sm:h-auto max-md:h-auto  relative flex justify-center items-center flex-col ">
        <div className="h-2/5  w-full relative bg-white">
          <div className="w-full h-1/2  flex justify-center items-center ">
            <span>
              {" "}
              <img
                src={logo}
                alt=""
                className="w-72 h-60  object-contain"
              />{" "}
            </span>
          </div>
        </div>

        <div className="h-full w-full bg-[#FF7700] flex justify-center flex-col items-center relative ">
          <div className="absolute w-12/13  justify-self-center h-96 -top-56 woman-bg flex flex-col gap-5 rounded-2xl place-content-center items-center">
            <h1 className="text-5xl max-sm:text-3xl max-md:text-4xl max-sm:text-center font-extrabold text-white font-sans">
              Ready to shape your future?{" "}
            </h1>

            <h1 className="text-5xl max-sm:text-3xl font-extrabold text-white font-sans">
              Let's begin!
            </h1>

            <button className="bg-[#EF760C63] rounded-full h-16  text-2xl font-sans font-normal text-white p-2 w-[270px]">
              Get Started
            </button>
          </div>

          <div className="relative h-auto  flex justify-evenly w-full px-8  items-start mt-40 max-sm:px-2 max-md:flex-col ">
            <div className=" flex justify-start flex-col w-1/4 h-auto px-8 max-sm:w-full max-md:w-full  max-sm:p-2 ">
              <div className="lg:w-auto px-10 lg:-mt-5 max-sm:px-0 max-md:px-2 max-sm:w-full ">
                <img
                  src={logo}
                  alt=""
                  className="w-full lg:h-auto max-sm:h-auto max-sm:w-auto max-md:place-self-center max-md:h-auto max-md:w-auto  max-sm:place-self-center   shadow-filter object-contain  max-sm:-ml-6"
                />{" "}
                <p className="font-sans lg:text-sm  lg:font-normal font-medium text-white">
                  We believe education should be accessible, inclusive, and
                  globally enriching. Whether you're a student dreaming of
                  studying abroad or an institution striving for a more
                  inclusive international student experience, Etoeko is here to
                  help you thrive.
                </p>
              </div>
            </div>

            <div className="footer-img-container  w-1/4 h-auto p-10   px-8 max-sm:w-full max-md:w-full max-sm:p-2  ">
              <strong className="text-xl font-extrabold font-sans text-white">
                {subMenus[0].header}
              </strong>
              <ul className="flex flex-col gap-10 mt-10  max-sm:mt-2 max-md:mt-3  max-sm:gap-5  max-sm:px-1">
                {subMenus[0].children.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer text-white font-normal "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-img-container  w-1/4 h-auto p-10   px-8 max-sm:w-full max-md:w-full max-sm:p-2  ">
              <strong className="text-xl font-extrabold font-sans text-white">
                {subMenus[1].header}
              </strong>
              <ul className="flex flex-col gap-10 mt-10  max-sm:mt-2 max-md:mt-3  max-sm:gap-5  max-sm:px-1">
                {subMenus[1].children.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer text-white font-normal "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-img-container  w-1/4 h-auto p-10   px-8 max-sm:w-full max-md:w-full max-sm:p-2  ">
              <strong className="text-xl font-extrabold font-sans text-white">
                {subMenus[2].header}
              </strong>
              <ul className="flex flex-col gap-10 mt-10  max-sm:mt-2 max-md:mt-3  max-sm:gap-5  max-sm:px-1">
                {subMenus[2].children.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer text-white font-normal "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-1/3 max-sm:mb-5 max-sm:mt-5 max-md:w-full flex justify-evenly w-full  lg:px-14 items-end max-sm:px-2 max-sm:h-auto max-sm:flex-col max-md:flex-col ">
            <div className="w-[246px] h-[218px] max-md:h-full max-sm:px-0 max-sm:w-full max-md:w-full max-md:px-14 max-md:mb-2 max-md:rounded-lg">
              <img
                src={glassHouse}
                alt="complex-building"
                className="w-full h-full object-cover max-md:object-cover max-md:w-full"
              />
            </div>

            <div className="w-1/4 max-sm:w-full max-md:w-full max-md:p-1 flex justify-center items-end p-10 py-4 max-sm:p-2">
              <div className=" w-full flex   items-end justify-center max-sm:justify-start gap-4 max-md:-ml-1  max-sm:gap-2">
                <FaLocationDot className="lg:text-4xl text-white max-sm:text-4xl max-md:text-4xl" />
                <p className="text-white font-sans lg:text-md max-sm:font-normal">
                  6th Floor, Park Royal, 2 Lake Drive, First Central 200 Abuja,
                  NW10 7FQ, Nigeria.{" "}
                </p>
              </div>
            </div>

            <div className="w-1/4 max-sm:w-full max-md:w-full flex justify-center items-end p-10 py-4 max-sm:p-2">
              <div className=" w-full flex  items-center justify-center gap-4 max-sm:justify-start  max-md:justify-start max-sm:-ml-2  ">
                <HiMailOpen className="lg:text-4xl max-md:text-4xl text-white max-sm:text-4xl" />
                <p className="text-white font-sans">info@etoeko.com.uk</p>
              </div>
            </div>

            <div className="w-1/4 max-sm:w-full max-md:w-full  flex justify-center items-end p-10 max-sm:p-0 py-4 max-sm:mt-4">
              <div className=" w-full flex  items-center justify-start gap-6 max-sm:gap-3 max-md:-ml-0 max-sm:ml-2 ">
                <FaFacebook className="text-3xl text-white" />
                <FaLinkedin className="text-3xl text-white" />
                <FaInstagram className="text-3xl text-white" />
                <RiTwitterXFill className="text-3xl text-white" />
                <FaYoutube className="text-3xl text-white" />
              </div>
            </div>
          </div>

          <div className=" w-full  bg-[#FF7700] mt-10  px-16 max-sm:px-2 max-md:px-12">
            <div className="w-full border-b border-white"></div>
            <div className="h-auto  flex justify-between items-center gap-2 mt-5 max-sm:flex-col">
              <div className=" w-2/6 max-sm:w-full  font-sans flex justify-center items-center text-white">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Consulting
                  Education, All rights reserved. Powered by Etoeko.
                </p>
              </div>
              <div className=" w-4/6 max-sm:w-full max-sm:mb-4  p-2 max-sm:p-0">
                <div className="flex justify-end items-center gap-10 max-sm:flex-col max-md:flex-col max-md:gap-5 max-sm:gap-2 max-sm:items-start">
                  {["Terms of use", "Cookie policy", "Privacy policy"].map(
                    (text) => (
                      <Link
                        key={text}
                        to={"#"}
                        className="font-sans text-xl max-sm:font-normal max-md:font-normal text-white"
                      >
                        {text}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
