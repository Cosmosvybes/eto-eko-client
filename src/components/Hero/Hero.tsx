import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiLinkedin, SiYoutube } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import ServiceFrame from "./sub-component/ServiceFrame";
import { useState } from "react";
import { SERVICE_IMAGES } from "../constants";

const Hero = () => {
  const [services] = useState([
    {
      paragraph:
        "We guide students through every step of their international education journey from choosing the right course and country to visa support and settling in.",
      header: "Student Recruitment",
      img: SERVICE_IMAGES[2],
    },
    {
      paragraph:
        "We help institutions and governments create strategies, policies, and environments that welcome international students and foster inclusion.",
      header: "Higher Education and Gorvernment Consulting",
      img: SERVICE_IMAGES[0],
    },
    {
      paragraph:
        "Empowering teams and leaders with tools to succeed in diverse, global environments.",
      header: "Training and Capacity Opportunities ",
      img: SERVICE_IMAGES[1],
    },
  ]);

  return (
    <>
      <div className="relative flex justify-between w-full   ">
        <div className="relative w-16 flex flex-col ">
          <div className="relative  w-full h-auto flex-col gap-8 flex py-3 mt-3  items-center">
            <FaFacebook className="text-4xl" />
            <SiLinkedin className="text-4xl" />
            <FiInstagram className="text-4xl" />
            <RiTwitterXFill className="text-4xl" />
            <SiYoutube className="text-4xl" />
          </div>

          <div className="relative w-full h-auto justify-center flex ">
            <p className="vertical-mode font-normal text-xl ">
              CONNECT WITH US
            </p>
          </div>
        </div>

        <div className="h-[100vh]   hero-bg w-full flex gap-4 justify-between items-center">
          <div className="linear-bg w-5/7 h-full flex justify-between  p-24  items-center ">
            <div className="relative h-[auto] gap-18  w-[538px]  p-[24px]">
              <label htmlFor="">
                <input
                  type="text"
                  className="w-full border p-4 px-4 rounded-4xl outline-none text-xl bg-gray-100 border-sky-500"
                  placeholder="Search here ..."
                />
                <GoSearch className="absolute text-3xl right-8 top-10 text-sky-300" />
              </label>

              <div className="relative w-full mt-10 ">
                <h1 className="font-sans font-extrabold text-6xl text-[#3DDFFF]">
                  Empowering Global Education & Inclusion.
                </h1>
              </div>

              <div className="w-full mt-10">
                <p className="px-[10px] text-[20px] font-sans font-medium ">
                  {" "}
                  Welcome to Eto-eko International Edventures Ltd your trusted
                  partner in international education, student recruitment, and
                  inclusive consultancy.
                </p>
              </div>

              <button className="w-[365px] h-[auto] text-[#FFFFFF] text-2xl font-bold bg-[#3DDFFF] rounded-full mt-10 px-3 py-4 slow-shift">
                {" "}
                Get Started
              </button>
            </div>
          </div>

          <div className="w-2/7 h-full flex justify-evenly  gap-2 py-5 px-5">
            <div className=" w-1/3 h-full glass "></div>
            <div className=" w-1/3 h-full gap-2 flex flex-col ">
              <div className=" h-1/3 w-full glass  backdrop-blur-x "></div>
              <div className=" h-1/3 w-full glass  backdrop-blur-x"></div>
              <div className=" h-1/3 w-full glass  backdrop-blur-x"></div>
            </div>
            <div className="w-1/3  flex flex-col gap-2 h-full">
              <div className=" h-2/3 w-full glass"></div>
              <div className=" h-1/3 w-full glass"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="h-auto flex gap-[30px] px-10 py-12 justify-between items-center relative">
        {services.map(({ paragraph, header, img }) => (
          <ServiceFrame header={header} paragraph={paragraph} imgFile={img} />
        ))}
      </section>
    </>
  );
};

export default Hero;
