import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <>
      <motion.section className=" lg:h-auto max-md:h-auto max-md:mb-10 flex justify-between max-sm:flex-col max-sm:items-start  mt-25 max-md:mt-0 px-10 gap-10 max-sm:gap-7 max-sm:px-5 max-sm:h-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", ease: "backIn", duration: 1 }}
          className=" w-3/6 who-we-are-bg max-sm:w-full max-sm:h-[24rem] max-md:h-auto bg-scroll max-sm:bg-fixed max-sm:bg-cover max-sm:rounded-lg"
        ></motion.div>

        <div className=" w-3/6 flex justify-center max-sm:w-full  items-start flex-col gap-12 max-sm:gap-6 max-sm:items-start">
          <div className="flex gap-4 items-center">
            {" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
              className="h-8 w-1 bg-[#074941]"
            ></motion.span>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", ease: "backIn", duration: 1 }}
              className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl"
            >
              Who We Are !
            </motion.h1>{" "}
          </div>
          <p className="font-normal lg:text-xl font-sans ">
            Etoeko International Edventures Ltd is a global education company
            dedicated to making international education accessible to students
            from every corner of the world. We specialize in recruiting students
            around the world from countries like Nigeria, India, and Nepal into
            prestigious higher education institutions in the UK, US, and beyond.
          </p>
          <p className="font-normal lg:text-xl font-sans l">
            But we’re more than a recruitment agency we’re a change-driven
            consultancy, working with education providers, businesses, and
            governments to build inclusive, culturally agile, and
            policy-informed educational environments.
          </p>

          <p className="font-normal lg:text-xl font-sans ">
            Our expert academic counsellors make the route to global education
            not only achievable but also exciting. 
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default WhoWeAre;
