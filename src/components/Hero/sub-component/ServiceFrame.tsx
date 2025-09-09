import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceFrame = ({
  header,
  paragraph,
  imgFile,
}: {
  header: string;
  paragraph: string;
  imgFile: string;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
        transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
        className=" w-2/4 h-auto  max-sm:flex-row max-md:flex-row max-sm:w-full max-md:w-full gap-[13px] mt-2  max-sm:gap-0  flex flex-col items-center justify-start max-sm:justify-between  max-md:justify-between  max-md:items-start max-sm:items-start"
      >
        <div className="">
          <img
            src={imgFile}
            alt="service photo"
            className="object-cover  rounded-full rounded-bl-none  w-[246px] h-[224px] max-sm:w-24 max-sm:h-24"
          />
        </div>

        <div className="h-[230px] max-sm:h-auto max-sm:w-3/4  max-md:w-1/2  flex-col flex justify-center gap-5 items-center  max-sm:items-end max-md:items-end">
          <div className="flex gap-1  items-start  flex-col justify-center">
            {" "}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", ease: "backIn", duration: 1 }}
              className="text-4xl lg:text-center font-medium max-md:text-right max-md:text-xl  max-sm:text-right font-sans max-sm:text-xl max-sm:justify-end"
            >
              {header}{" "}
            </motion.h1>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
              className="w-1/4 h-0.5 place-self-end lg:place-self-center lg:mt-2  bg-[#EF760C]"
            ></motion.span>
          </div>

         
          <p className="font-sans font-normal text-right">{paragraph}</p>

          <Link
            to="/about-us"
            className=" px-3 w-1/3 shadow max-sm:text-sm py-4 max-sm:px-2 max-md:py-2 bg-[#FF7700] text-shadow-sm text-white text-center rounded-full transition duration-500 hover:-translate-y-0.5 hover:bg-amber-800"
          >
            Explore
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceFrame;
