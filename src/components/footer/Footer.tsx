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
      <footer className="h-[60rem] bg-[#FF7700] relative flex justify-center items-center flex-col ">
        <div className="absolute w-12/13  justify-self-center h-96 -top-70 woman-bg flex flex-col gap-5 rounded-2xl place-content-center items-center">
          <h1 className="text-5xl font-extrabold text-white font-sans">
            Ready to shape your future?{" "}
          </h1>

          <h1 className="text-5xl font-extrabold text-white font-sans">
            Let's begin!
          </h1>

          <button className="bg-[#EF760C63] rounded-full h-16  text-2xl font-sans font-normal text-white p-2 w-[270px]">
            Get Started
          </button>
        </div>

        <div className="w-full h-auto flex justify-between  ">
          <div className="footer-img-container flex justify-start flex-col w-1/4 h-auto px-8 ">
            <div className="w-5/6 px-10 ">
              <img
                src={logo}
                alt=""
                className="w-full h-44 object-contain -ml-12"
              />{" "}
              <p className="font-sans  font-medium text-white">
                We believe education should be accessible, inclusive, and
                globally enriching. Whether you're a student dreaming of
                studying abroad or an institution striving for a more inclusive
                international student experience, Etoeko is here to help you
                thrive.
              </p>
            </div>
          </div>

          <div className="footer-img-container  w-1/4 h-auto p-14 ">
            <h1 className="text-xl font-extrabold font-sans text-white">
              {subMenus[0].header}
            </h1>
            <ul className="flex flex-col gap-10 mt-10  ">
              {subMenus[0].children.map((link) => (
                <li className="cursor-pointer text-white">{link}</li>
              ))}
            </ul>
          </div>
          <div className="footer-img-container  w-1/4 h-auto  p-10">
            <h1 className="text-xl font-extrabold font-sans text-white">
              {subMenus[1].header}
            </h1>
            <ul className="flex flex-col gap-10 mt-10  ">
              {subMenus[1].children.map((link) => (
                <li className="cursor-pointer text-white">{link}</li>
              ))}
            </ul>
          </div>
          <div className="footer-img-container  w-1/4 h-auto  p-10">
            <h1 className="text-xl font-extrabold font-sans text-white">
              {subMenus[2].header}
            </h1>
            <ul className="flex flex-col gap-10 mt-10  ">
              {subMenus[2].children.map((link) => (
                <li className="cursor-pointer text-white">{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" w-full h-auto flex justify-between px-16  ">
          <div className="w-[246px] h-[218px] ">
            <img
              src={glassHouse}
              alt="complex-building"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/4  flex justify-center items-end px-10 py-4">
            <div className=" w-full flex  items-end justify-center gap-4 ">
              <FaLocationDot className="text-6xl text-white" />
              <p className="text-white font-sans">
                6th Floor, Park Royal, 2 Lake Drive, First Central 200 Abuja,
                NW10 7FQ, Nigeria.{" "}
              </p>
            </div>
          </div>
          <div className="w-1/4  flex justify-center items-end px-10 py-4">
            <div className=" w-full flex  items-center justify-center gap-4 ">
              <HiMailOpen className="text-6xl text-white" />
              <p className="text-white font-sans">info@etoeko.com.uk</p>
            </div>
          </div>

          <div className="w-1/4  flex justify-center items-end px-10 py-4">
            <div className=" w-full flex  items-center justify-start gap-10 ">
              <FaFacebook className="text-3xl text-white" />
              <FaLinkedin className="text-3xl text-white" />
              <FaInstagram className="text-3xl text-white" />
              <RiTwitterXFill className="text-3xl text-white" />
              <FaYoutube className="text-3xl text-white" />
            </div>
          </div>
        </div>

        <div className=" w-full  mt-5 px-16">
          <div className="w-full border-b border-white"></div>
          <div className="h-auto  flex justify-between items-center gap-2 mt-5">
            <div className=" w-2/6  font-sans flex justify-center items-center text-white">
              <p>
                Copyright &copy; {new Date().getFullYear()} Consulting
                Education, All rights reserved. Powered by Etoeko.
              </p>
            </div>
            <div className=" w-4/6  p-2">
              <div className="flex justify-end items-center gap-10">
                {["Terms of use", "Cookie policy", "Privacy policy"].map(
                  (text) => (
                    <Link to={"#"} className="font-sans text-xl text-white">
                      {text}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
