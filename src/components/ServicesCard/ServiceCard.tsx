import { useState } from "react";
import { SERVICE_IMAGES } from "../constants";
import ServiceFrame from "../Hero/sub-component/ServiceFrame";
import { motion } from "framer-motion";

const ServiceCard = () => {
  const [services] = useState([
    {
      paragraph:
        "We guide students through every step of their international education journey from choosing the right course and country to visa support and settling in.",
      header: "Student Recruitment",
      img: SERVICE_IMAGES[3],
    },
    {
      paragraph:
        "We help institutions and governments create strategies, policies, and environments that welcome international students and foster inclusion.",
      header: "Higher Education and Gorvernment Consulting",
      img: SERVICE_IMAGES[4],
    },
    {
      paragraph:
        "Empowering teams and leaders with tools to succeed in diverse, global environments.",
      header: "Training and Capacity Opportunities ",
      img: SERVICE_IMAGES[5],
    },
  ]);

  return (
    <>
      <div className="lg:h-screen max-sm:h-auto  max-md:h-auto py-20 max-sm:py-2 max-md:py-5 relative justify-center flex  flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", ease: "backIn", duration: 1 }}
          className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl"
        >
          Our Services
        </motion.h1>{" "}
        <section className="lg:h-screen  max-sm:h-auto max-md:h-auto w-full flex gap-[30px] px-10 py-12 justify-between max-sm:flex-col   max-md:flex-col  items-center relative">
          {services.map(({ paragraph, header, img }) => (
            <ServiceFrame header={header} paragraph={paragraph} imgFile={img} />
          ))}
        </section>
      </div>
    </>
  );
};

export default ServiceCard;
