import { motion } from "framer-motion";
const ServiceFrameCol = ({
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
        transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
        className=" w-full  h-auto  mt-2 max-sm:flex-row  max-sm:gap-0  max-md:flex-row max-sm:w-full max-md:w-full  px-20 max-sm:px-2 max-md:px-4 gap-5 flex items-center max-sm:justify-start max-md:justify-start justify-start  max-sm:items-start max-md:items-start max-md:gap-2"
      >
        <div className="">
          <img
            src={imgFile}
            alt="service photo"
            className="object-cover  rounded-full rounded-bl-none  w-[246px] h-[224px] max-sm:w-24 max-sm:h-24"
          />
        </div>

        <div className="h-auto max-sm:h-auto w-3/5 max-sm:w-3/4  max-md:w-1/2  flex-col flex justify-center gap-10 max-sm:gap-4 max-md:gap-2 items-start  max-md:text-center max-sm:text-center max-sm:items-end max-md:items-end">
          <h1 className="text-4xl font-medium  max-md:text-right max-md:text-xl  max-sm:text-right font-sans max-sm:text-xl max-sm:justify-end">
            {header}
          </h1>
          <p className="font-sans max-sm:text-right">{paragraph}</p>

          <button className=" px-3 w-1/3  max-sm:text-sm py-4 max-sm:px-2 max-md:py-2 text-center  bg-[#FF7700] text-white rounded-full transition duration-500 hover:-translate-y-0.5 hover:bg-amber-800">
            Explore
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceFrameCol;
