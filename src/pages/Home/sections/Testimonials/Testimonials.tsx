import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      name: "Put Ankheet Singh",

      message: `Coming from Nigeria, I was worried about whether studying
                      abroad would align with my career back home. Their team
                      not only helped me secure admission but also guided me on
                      how my studies could address real challenges in my
                      community. It felt like they understood both worlds—global
                      opportunities and local realities`,
      country: "Nigeria",
      discipline: `Master's Student in Public at York St. John University, UK.`,
    },

    {
      name: "Dipesh Chaudhary",

      message: `Unlike other agencies I approached, they never pushed me into options I wasn’t comfortable with. Every step was explained clearly, and I always felt my goals came first. Today, I’m studying in Canada with a full sense of confidence that I made the right decision for 
my future.`,
      country: "Nepal",
      discipline: `Undergraduate Student of Computer Science, Canada University, London Campus.`,
    },
    {
      name: "Sirish Gurung",

      message: `As a first-generation student with a disability, I often felt international education wasn’t for people like me. But this team made me feel included from the start. They connected me with resources, scholarships, and mentors who understood my journey. For the first time, I felt that I truly belonged in global education.`,
      country: "India",
      discipline: `Exchange Student In Germany at York St. John University, UK.`,
    },
  ]);
  return (
    <>
      <div className="h-auto max-sm:h-auto max-md:h-auto  max-h-lvw:h-auto flex justify-start px-18 items-center py-16 flex-col mt-10 max-sm:px-0 max-sm:py-4">
        <h1       className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl">Testimonials</h1>

        <div className="h-auto w-full   grid grid-cols-3 gap-5 mt-14 max-sm:grid-cols-1 max-md:grid-cols-1 max-sm:px-2">
          {testimonials.map(({ name, country, message, discipline }, i) => (
            <div className=" w-full relative " key={i}>
              <div
                className={`lg:h-[32rem] rounded-lg flex justify-center items-center bg-[#FF7700] relative ${
                  i % 2 === 0 ? "rotate-x-180" : "rotate-0"
                }  `}
              >
                <div className="relative w-2/3 p-3 max-sm:w-[20rem] max-sm:h-[20rem] max-sm:px-0  flex justify-center items-center rounded-full h-2/3 place-items-center bg-amber-600 right-3.5 max-sm:right-0 top-2">
                  <div className="w-full h-full bg-white rounded-full relative p-10 border-2 border-dashed border-amber-600 ">
                    <p
                      className={`justify-self-center p-1  max-sm:py-2 font-sans  lg:text-[12px] max-sm:text-sm text-center  ${
                        i % 2 === 0 ? "rotate-x-180" : "rotate-0"
                      }  `}
                    >
                      {message}
                    </p>
                  </div>
                </div>

                {/* <div className="absolute w-28 rounded-2xl max-sm:w-24  -bottom-3  h-36  max-sm:h-28  max-sm:bottom-2  bg-white right-44  max-sm:rotate-180 max-sm:right-28"></div> */}
              </div>

              <div className="h-24 flex justify-center items-center flex-col z-10  mt-2 gap-2">
                <b className="font-bold font-2xl font-sans">{name}</b>
                <h2 className="font-medium">{country}</h2>
                <p className="font-sans font-normal max-sm:text-center">
                  {discipline}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to={"/testimonials"}
          className=" px-3 w-44 max-sm:w-[150px] py-4 mt-7 bg-[#FF7700] flex justify-center items-center gap-2 text-white rounded-full"
        >
          See More <BiCaretDown className="inline" />
        </Link>
      </div>
    </>
  );
};

export default Testimonials;
