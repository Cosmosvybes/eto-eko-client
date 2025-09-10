import { motion } from "framer-motion";
import { useState } from "react";
import { FaConnectdevelop, FaUsers } from "react-icons/fa";
import { FaGlobe, FaTeamspeak } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const [offers] = useState([
    {
      id: 1,
      header: "Global Reach , Local Expertise",
      content:
        "We connect students and institutions across borders with insight into local challenges and aspirations.",
      fullContent: `Expert guidance in mapping out your academic 
journey, from program selection to university 
applications, ensuring alignment with your career 
goals and aspirations. Strategic Educational 
Consulting.`,
      icon: <FaGlobe className="text-8xl text-[#074941]" id="logo" />,
    },
    {
      id: 2,
      header: "Ethical, Student centric Recruitment",
      content:
        "We connect students and institutions across borders with insight into local challenges and aspirations.",
      fullContent: `Expert guidance in mapping out your academic 
journey, from program selection to university 
applications, ensuring alignment with your career 
goals and aspirations. Strategic Educational 
Consulting.`,
      icon: <FaUsers className="text-8xl text-[#074941]" id="logo" />,
    },
    {
      id: 3,
      header: "Inclusive by Design",
      content:
        "We connect students and institutions across borders with insight into local challenges and aspirations.",
      fullContent: `Expert guidance in mapping out your academic 
journey, from program selection to university 
applications, ensuring alignment with your career 
goals and aspirations. Strategic Educational 
Consulting.`,
      icon: <FaConnectdevelop className="text-8xl text-[#074941]" id="logo" />,
    },
    {
      id: 4,
      header: "Experienced and Mission Led Team",
      content:
        "We connect students and institutions across borders with insight into local challenges and aspirations.",
      fullContent: `Expert guidance in mapping out your academic 
journey, from program selection to university 
applications, ensuring alignment with your career 
goals and aspirations. Strategic Educational 
Consulting.`,
      icon: <FaTeamspeak className="text-8xl text-[#074941]" id="logo" />,
    },
    {
      id: 5,
      header: "Educational consulting",
      content:
        "We connect students and institutions across borders with insight into local challenges and aspirations.",
      fullContent: `Expert guidance in mapping out your academic 
journey, from program selection to university 
applications, ensuring alignment with your career 
goals and aspirations. Strategic Educational 
Consulting.`,
      icon: (
        <RiCustomerService2Fill className="text-8xl text-[#074941]" id="logo" />
      ),
    },
    {
      id: 6,
      header: "Educational consulting",
      content:
        "We connect students and institutions across borders with insight into local challenges and aspirations.",
      fullContent: `Expert guidance in mapping out your academic 
journey, from program selection to university 
applications, ensuring alignment with your career 
goals and aspirations. Strategic Educational 
Consulting.`,
      icon: <MdPhoneInTalk className="text-8xl text-[#074941]" id="logo" />,
    },
  ]);

  return (
    <>
      <section className="lg:h-auto   flex items-center  flex-col lg:mt-24 max-md:mt-0 max-sm:mt-10  lg:px-18 lg:py-20 max-sm:px-2 gap-5 ">
        <div className="flex gap-4 max-sm:justify-start items-center">
          {" "}
          {/* <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
            className="h-6 w-1 bg-[#EF760C]"
          ></motion.span> */}
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", ease: "backIn", duration: 1 }}
            className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl"
          >
            What We Offer
          </motion.h1>{" "}
        </div>
        <p className="lg:text-2xl lg:font-medium sm:font-normal max-sm:text-center md:text-center">
          Providing Educational Pathways that shape Future Leaders.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", ease: "anticipate", duration: 1 }}
          className=" lg:h-full lg:w-full grid grid-cols-3 max-sm:grid-cols-1  max-md:grid-cols-1 max-sm:mt-2 lg:p-5  gap-5  md:p-3 sm:p-3"
        >
          {offers.map(({ header, content, fullContent, icon }, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", ease: "anticipate", duration: 1 }}
              className="w-full max-md:p-3   lg:p-5"
              key={i}
            >
              <motion.div
                initial={{ opacity: 0, x: -20,  }}
                whileInView={{ opacity: 1, x: 0,  }}
                transition={{ type: "tween", ease: "backIn", duration: 0.7 }}
                className={`lg:w-full ${
                  i % 2 !== 0
                    ? "bg-[#FF7700] text-[#074941]"
                    : "bg-white text-[#074941]"
                } shadow-lg shadow-gray-200 max-sm:p-3 h-full max-sm:h-auto max-sm:w-full lg:h-full max-md:p-3   max-md:w-full rounded-lg gap-5 lg:p-5 flex justify-center items-start flex-col hover-animate`}
              >
                {icon}
                <h1 className="text-xl font-sans " id="offerHeader">
                  {header}
                </h1>
                <p className="font-sans font-medium " id="brief">
                  {content}
                </p>

                <div className="flex flex-col justify-center">
                  <p className="font-sans font-medium " id="fullContent">
                    {fullContent}
                  </p>

                  <Link
                    to="/about-us"
                    id="learnMoreBtn"
                    className="rounded-full bg-[#FF7700] text-white text-center font-medium p-3 w-1/2 "
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className=" h-full w-full flex justify-center items-center  relative ">
          <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 p-10 gap-10 ">
            {[
              { id: 1, number: 100, boldHead: "Students", thinData: "Placed" },
              {
                id: 2,
                number: 10,
                boldHead: "Institutions",
                thinData: "Supported",
              },
              {
                id: 3,
                number: 3,
                boldHead: "Countries Actively",
                thinData: "Recruiting",
              },
            ].map((elem) => (
              <div
                key={elem.id}
                className="font-bold  font-sans flex flex-col justify-center items-center"
              >
                <span className="star text-white font-bold text-center flex justify-center items-center text-4xl">
                  {elem.number}
                </span>
                <span className="text-center">
                  <b className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl">
                    {" "}
                    {elem.boldHead}
                  </b>
                  <p className="font-normal text-xl">{elem.thinData}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
