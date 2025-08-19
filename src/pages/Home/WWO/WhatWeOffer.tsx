import { useState } from "react";
import { FaServicestack } from "react-icons/fa6";
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
    },
  ]);

  return (
    <>
      <section className="h-screen  flex items-center  flex-col mt-36 gap-3">
        <h1 className="text-2xl font-medium font-sans">What we offer</h1>
        <p className="text-2xl font-medium">
          Providing Educational Pathways that shape Future Leaders.
        </p>
        <div className=" h-full w-full grid grid-cols-3 p-10 gap-4">
          {offers.map(({ header, content, fullContent }, i) => (
            <div className="w-full rounded-lg" key={i}>
              <div
                className={`w-5/6 ${
                  i % 2 !== 0
                    ? "bg-[#3DDFFF] text-white"
                    : "bg-white text-black"
                } shadow-lg shadow-gray-200 h-full rounded-lg gap-5 p-5 flex justify-center items-start flex-col hover-animate`}
              >
                <FaServicestack className="text-8xl" id="logo" />
                <h1 className="text-xl font-sans " id="offerHeader">
                  {header}
                </h1>
                <p className="font-sans font-medium " id="brief">
                  {content}
                </p>

                <p className="font-sans font-medium " id="fullContent">
                  {fullContent}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" h-full w-full flex justify-center items-center mt-10">
          <div className="w-full grid grid-cols-3 p-10 gap-10 ">
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
              <div className="font-bold  font-sans flex flex-col justify-center items-center">
                <span className=" star text-white text-center flex justify-center items-center text-2xl">
                  {elem.number}
                </span>
                <span className="text-center">
                  <b className="text-xl font-bold"> {elem.boldHead}</b>
                  <p className="font-normal">{elem.thinData}</p>
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
