import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiLinkedin, SiYoutube } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import ServiceFrame from "./sub-component/ServiceFrame";
import { useState } from "react";
import { SERVICE_IMAGES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

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
      <main className="relative  border-none  w-full max-sm:mt-0 max-sm:h-auto max-md:h-auto">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween", ease: "backIn" }}
          className="lg:h-screen  hero-bg w-full  flex  justify-between items-center max-sm:p-0 max-sm:h-[38rem]"
        >
          <div className="w-[10%] h-full bg-white border-none ">
            <div className="relative   w-full h-auto flex-col gap-8 flex py-3 mt-3  max-sm:px-4 items-center">
              <FaFacebook className="text-4xl max-sm:text-2xl text-[#074941]" />
              <SiLinkedin className="text-4xl max-sm:text-2xl text-[#074941]" />
              <FiInstagram className="text-4xl max-sm:text-2xl text-[#074941]" />
              <RiTwitterXFill className="text-4xl max-sm:text-2xl text-[#074941]" />
              <SiYoutube className="text-4xl max-sm:text-2xl  text-[#074941] " />
            </div>

            <div className="relative w-full h-auto justify-center flex ">
              <p className="vertical-mode font-normal max-md:text-md  max-sm:text-sm lg:text-2xl text-gray-400">
                CONNECT WITH US
              </p>
            </div>
          </div>{" "}
          <div className="w-[90%]  h-full">
            <div className="w-2/7 h-full flex justify-evenly  absolute right-0  gap-2 py-5 px-5">
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

            {/*  */}

            <div className="linear-bg lg:w-5/7 h-full flex justify-between   p-24 max-sm:p-0 max-sm:items-start  max-md:items-start  items-center max-sm:w-full max-md:w-full ">
              <div className="relative h-[auto] gap-18 max-sm:mt-10  max-sm:gap-5 w-[538px] max-sm:w-full max-md:w-full max-md:p-2  lg:p-[20px] max-sm:p-5">
                <label htmlFor="" className="relative">
                  <AnimatePresence>
                    <motion.input
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "tween",
                        ease: "backIn",
                        duration: 1,
                      }}
                      // animate={{ opacity: 1 }}
                      // transition={{ duration: 1, ease: "easeIn" }}
                      type="text"
                      className="w-full  p-4 px-4 rounded-4xl ml-2 outline-none font-normal bg-gray-100 border-amber-600 max-sm:px-2"
                      placeholder="Search here ..."
                    />
                    <GoSearch className="absolute text-3xl right-8  top-0   max-sm:top-0 max-sm:right-4 text-amber-300" />
                  </AnimatePresence>
                </label>

                <div className="relative w-full mt-10 ml-2 ">
                  <AnimatePresence>
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, y: 10 }}
                      transition={{ duration: 0.5, ease: "easeIn" }}
                      exit={{ y: -10 }}
                      className="font-sans font-extrabold text-6xl max-sm:text-4xl text-[#FF7700]"
                    >
                      Empowering Global Education & Inclusion.
                    </motion.h1>
                  </AnimatePresence>
                </div>

                <div className="w-full mt-10">
                  <p className="px-[10px] text-[20px] max-sm:font-normal text-[#FF7700] font-sans font-medium">
                    {" "}
                    Welcome to Eto-eko International Edventures Ltd your trusted
                    partner in international education, student recruitment, and
                    inclusive consultancy.
                  </p>
                </div>

                <button className="w-[365px] max-sm:h-14 ml-2 h-[auto] bg-[#FF7700] text-2xl max-sm:text-[16px] max-sm:w-[150px] max-md:w-full font-bold text-white rounded-full mt-10 px-3 py-4 max-sm:py-1 max-sm:px-2 transition duration-500 hover:bg-amber-800">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* <ServiceCard /> */}
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
