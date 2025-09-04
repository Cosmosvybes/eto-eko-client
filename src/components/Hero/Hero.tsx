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
      <main className="relative flex justify-between w-full max-sm:mt-0 max-sm:h-auto max-md:h-auto">
        <div className="relative w-16 max-sm:px-1 flex flex-col max-md:px-2 ">
          <div className="relative  w-full h-auto flex-col gap-8 flex py-3 mt-3  items-center">
            <FaFacebook className="text-4xl text-[#074941]" />
            <SiLinkedin className="text-4xl text-[#074941]" />
            <FiInstagram className="text-4xl text-[#074941]" />
            <RiTwitterXFill className="text-4xl text-[#074941]" />
            <SiYoutube className="text-4xl text-[#074941]" />
          </div>

          <div className="relative w-full h-auto justify-center flex ">
            <p className="vertical-mode font-normal text-xl ">
              CONNECT WITH US
            </p>
          </div>
        </div>

        <div className="h-screen  hero-bg w-full  flex gap-4 justify-between items-center max-sm:p-0">
          <div className="linear-bg w-5/7 h-full flex justify-between  p-24 max-sm:p-0  items-center max-smLw-full max-md:w-full ">
            <div className="relative h-[auto] gap-18  max-sm:gap-5 w-[538px] max-sm:w-full max-md:w-full  p-[24px] max-sm:p-0">
              <label htmlFor="">
                <input
                  type="text"
                  className="w-full  p-4 px-4 rounded-4xl ml-2 outline-none text-xl bg-gray-100 border-amber-600 max-sm:px-2"
                  placeholder="Search here ..."
                />
                <GoSearch className="absolute text-3xl right-8 top-10  max-sm:top-5 max-sm:right-4 text-amber-300" />
              </label>

              <div className="relative w-full mt-10 ml-2 ">
                <h1 className="font-sans font-extrabold text-6xl max-sm:text-4xl text-[#FF7700]">
                  Empowering Global Education & Inclusion.
                </h1>
              </div>

              <div className="w-full mt-10">
                <p className="px-[10px] text-[20px] max-sm:text-[16px] font-sans font-medium">
                  {" "}
                  Welcome to Eto-eko International Edventures Ltd your trusted
                  partner in international education, student recruitment, and
                  inclusive consultancy.
                </p>
              </div>

              <button className="w-[365px] max-sm:h-16 ml-2 h-[auto] bg-[#FF7700] text-2xl max-sm:w-full max-md:w-full font-bold text-white rounded-full mt-10 px-3 py-4 max-sm:py-2 max-sm:px-2 transition duration-500 hover:bg-amber-800">
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
      </main>

      <section className="lg:h-auto max-sm:h-auto  max-md:h-auto flex gap-[30px] px-10 py-12 justify-between max-md:flex-col  max-sm:flex-col items-center relative max-sm:px-5">
        {services.map(({ paragraph, header, img }, i) => (
          <ServiceFrame
            header={header}
            paragraph={paragraph}
            imgFile={img}
            key={i}
          />
        ))}
      </section>
    </>
  );
};

export default Hero;
