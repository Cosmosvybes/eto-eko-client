import { motion } from "framer-motion";
import { useState } from "react";

const Corevalue = () => {
  const [values] = useState([
    {
      id: 1,
      header: "Our Vision",
      content: `A world where every student, regardless of background, has 
access to transformative international education and every institution 
is equipped to support them meaningfully.`,
    },
    {
      id: 2,
      header: "Our Mission",
      content: `To create pathways to global education for students and help institutions foster environments where diversity and inclusion are more than buzzwords they’re a way of life.`,
    },
    {
      id: 3,
      header: "Our Motto",
      content: `...Taking you places.`,
    },
  ]);

  return (
    <>
      <div className="lg:h-auto px-32 max-md:h-auto  relative max-md:px-10 max-sm:px-0 sm:h-auto sm:mb-5 ">
        <div className="lg:h-[44rem] mb-10  max-sm:h-auto max-md:h-[44rem] max-sm:w-full flex justify-center px-10 py-10 core-bg max-sm:bg-cover max-sm:bg-scroll max-sm:px-0 max-sm:flex-col">
          <div className="w-[493px] h-[147px] flex  items-center  py-5 flex-col max-sm:w-full">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", ease: "easeIn", duration: 0.5 }}
              className="text-4xl text-[#074941] font-bold"
            >
              Our Core
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", ease: "backIn", duration: 1 }}
              className="text-2xl text-[#074941]  text-center font-sans font-normal"
            >
              Transforming Dreams into Global Educational Success
            </motion.h2>
          </div>

          <div className="absolute max-sm:relative  w-full max-md:mt-24 max-sm:mt-0  h-[600px] max-sm:h-auto max-md:h-auto py-10 px-10  lg:mt-24 max-sm:px-2 max-md:px-20 flex justify-between max-sm:flex-col max-md:flex-col max-sm:z-0 gap-8 max-sm:gap-4">
            {values.map(({ id, header, content }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "tween", ease: "anticipate", duration: 1 }}
                className={`w-1/3 ${
                  i % 2 === 0 ? "lg:h-3/4" : "lg:h-4/5"
                } flex px-10 justify-center gap-3 md:h-[16rem]  max-sm:h-auto max-sm:rounded-lg  max-sm:py-10  max-md:rounded-lg  items-center flex-col z-20 max-sm:w-full max-md:w-full bg-[#EF760C33]`}
                key={id}
              >
                <h1 className="text-3xl font-bold text-[#FF7700]">{header}</h1>
                <p className="font-sans text-[#FF7700] text-xl font-normal text-center">
                  {content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Corevalue;
