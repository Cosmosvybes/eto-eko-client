import { BiCaretUp, BiPlayCircle } from "react-icons/bi";
import DynamicHero from "../../components/Hero/sub-component/DynamicHero";
import LetsShape from "../Home/sections/LetsShape/LetsShape";
import Footer from "../../components/footer/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SERVICE_IMAGES } from "../../components/constants";
import { useEffect, useState } from "react";
import ServiceFrameCol from "../../components/Hero/sub-component/ServiceFramCol";

const Service = () => {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
  ]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scaleX,
    [0, 1],
    ["rgba(7, 73, 65, 1)", "rgba(255, 119, 0, 1)"]
  );

  return (
    <>
      <div className="h-auto">
        <motion.div
          style={{
            transformOrigin: "left",
            position: "fixed",
            zIndex: 10,
            top: 0,
            scaleX,
            background,
            width: "100%",
            height: "10px",
          }}
        ></motion.div>

        <DynamicHero
          title="Our Services"
          paragraph="Learn more about our services"
          bg="our-service"
        />

        <section className="lg:h-auto max-sm:w-full max-md:h-auto mt-20 max-sm:mt-14 max-md:mt-16  w-full">
          <div className="w-11/12 h-full flex justify-between max-sm:w-full max-sm:flex-col ">
            <div className="w-10/12 h-full block  max-md:px-8   lg:px-24 lg:py-18 max-sm:px-4 max-sm:w-full max-md:w-full ">
              <div className="flex gap-4 items-center">
                {" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
                  className="h-8 w-1 bg-[#EF760C]"
                ></motion.span>
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "tween", ease: "backIn", duration: 1 }}
                  className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl"
                >
                  Global Reach, Local Expertise
                </motion.h1>{" "}
              </div>
              <div className=" flex flex-col gap-5 mt-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  Global education is about bridging worlds, and we specialize
                  in connecting students and institutions across borders with
                  precision and care. Our strength lies in combining a
                  wide-reaching international network with intimate knowledge of
                  local realities. We recognize that students from different
                  regions face unique social, cultural, and economic challenges
                  when pursuing education abroad. By tailoring our guidance to
                  these contexts, we ensure that global opportunities remain
                  accessible, practical, and relevant to each student’s journey.
                  This balance allows us to open doors internationally while
                  respecting and responding to the aspirations of local
                  communities.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  For institutions, our dual perspective enables us to build
                  strategies that are both globally ambitious and locally
                  sustainable. We help universities and colleges understand
                  student needs from diverse regions, ensuring that recruitment
                  efforts are culturally sensitive and effective. By aligning
                  academic offerings with local demands, institutions attract
                  students who are not only qualified but also committed to
                  contributing meaningfully to their host communities. This
                  creates a virtuous cycle of value, where global opportunities
                  benefit students, institutions, and the societies they
                  represent.
                </motion.p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Ethical, Student-Centric Recruitment
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  We believe integrity should be the foundation of international
                  student recruitment. In an industry where numbers often take
                  precedence, we remain committed to putting students at the
                  center of every decision. Our recruitment process is
                  transparent, ethical, and rooted in student welfare. We guide
                  students with honesty—presenting opportunities that are
                  realistic, attainable, and aligned with their goals. By
                  prioritizing ethics over profit, we ensure that every
                  placement reflects the student’s best interest, not
                  institutional quotas or short-term gains.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  Transparency runs through every stage of our process. We
                  provide students with clear, detailed information about
                  programs, fees, living costs, and future opportunities before
                  they make decisions. There are no hidden agendas or misleading
                  promises. We empower students and families to make informed
                  choices, equipping them with facts rather than pressure. This
                  trust-based approach builds confidence and reassures students
                  that they are valued as individuals, not statistics.
                </motion.p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Inclusive by Design
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  Inclusion is not an afterthought—it is built into every aspect
                  of our work. We understand that international education has
                  historically excluded certain groups, whether due to
                  financial, cultural, or social barriers. Our mission is to
                  dismantle those barriers by creating systems and pathways that
                  actively promote equity. From offering scholarships and
                  funding guidance to advocating for accessibility, we ensure
                  that opportunities reach those who might otherwise be left
                  behind. We believe global education should be a right, not a
                  privilege.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  Our inclusive approach extends to institutional partnerships
                  as well. We work with universities and organizations to embed
                  inclusivity into their policies, recruitment strategies, and
                  classroom environments. This includes advising on gender
                  equity, cultural diversity, and accessibility measures that
                  make campuses welcoming to all students. By promoting
                  diversity in every program we touch, we help institutions
                  build vibrant, multicultural communities where every student
                  feels valued and represented.
                </motion.p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Experienced & Mission-Led Team
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  Our greatest strength lies in the people who drive our
                  mission. Our consultants and advisors come from diverse
                  backgrounds, including higher education, international
                  affairs, student counseling, and cultural policy. This
                  diversity of expertise allows us to provide holistic guidance
                  that goes beyond admissions. Each member of our team brings
                  unique perspectives, lived experiences, and specialized skills
                  that collectively enhance the quality of service we offer.
                  Together, we form a mission-led unit that prioritizes impact
                  over profit
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "keyframes",
                    ease: "circInOut",
                    duration: 0.5,
                  }}
                  className="font-normal"
                >
                  Experience allows us to anticipate challenges and provide
                  solutions that are practical and effective. Having worked
                  within universities and across international education
                  sectors, our advisors understand both sides of the journey—the
                  institutional priorities and the student realities. This dual
                  insight allows us to bridge gaps, create smoother transitions,
                  and design strategies that meet the needs of both students and
                  institutions. Students benefit not only from technical
                  knowledge but also from empathetic guidance shaped by
                  real-world understanding
                </motion.p>
              </div>
            </div>

            <div className="w-2/12  h-full max-md:w-4/12  max-sm:w-full max-sm:mt-5  px-5">
              <div>
                <b className="font-bold text-xl max-md:text-xl max-sm:font-bold">
                  Discover more
                </b>{" "}
                <ul className="gap-3 flex flex-col mt-2">
                  <li className="flex lg:font-normal  justify-start  max-md:text-xl items-center max-sm:font-normal">
                    {" "}
                    <BiCaretUp className="text-4xl max-md:text-xl text-[#EF760C]" />{" "}
                    Our Services
                  </li>
                  <li className="flex lg:font-normal  justify-start max-md:text-xl items-center max-sm:font-normal">
                    {" "}
                    <BiCaretUp className="text-4xl max-md:text-xl text-[#EF760C]" />{" "}
                    Testimonials
                  </li>
                  <li className="flex lg:font-normal justify-start max-md:text-xl items-center max-sm:font-normal">
                    {" "}
                    <BiCaretUp className="text-4xl max-md:text-2xl text-[#EF760C]" />{" "}
                    Partner Institutions
                  </li>
                </ul>
              </div>

              {/*  */}

              <div className="mt-10  h-auto flex flex-col">
                <b className="font-bold text-xl max-md:text-xl max-sm:font-bold lg:text-center">
                  Latest News
                </b>
                <div className="w-44 h-auto relative  flex justify-center  mt-5 items-center max-sm:justify-start">
                  <div className="triangle  flex justify-center items-center"></div>
                </div>
                <div className=" w-full mt-4 p-2 max-sm:p-0  h-auto">
                  <p className="font-semibold lg:text-[24px] max-sm:text-[16px] max-md:text-[16px]">
                    How Does the UK Education System Work ?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="lg:p-10 lg:px-1 max-sm:p-5 max-md:p-10 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "keyframes",
                ease: "circInOut",
                duration: 0.5,
              }}
              className="relative flex flex-col max-sm:relative w-full lg:h-[650px] max-sm:h-[14rem] max-md:h-[20rem]  mt-10 lg:pt-[43px] lg:pb-[43px] lg:p-10  max-sm:p-4 max-md:p-5 "
            >
              <div className="h-1/7   top-0  absolute max-sm:absolute w-10/11 right-0 bg-[#EF760C] -z-10"></div>
              <div className="h-1/7 bottom-0   bg-[#EF760C] absolute w-10/11 -z-10 left-0"></div>
              <div className=" w-full  relative flex justify-center items-center  vid-img  h-full max-sm:h-full bg-white">
                <BiPlayCircle className="text-8xl text-white max-sm:text-6xl max-md:text-8xl" />
              </div>
            </motion.div>
          </div>

          {/*  */}

          <div className="lg:h-screen lg:p-10  mt-10 max-md:h-auto max-sm:h-auto max-sm:p-5 max-md:p-10">
            <div className="w-full h-full flex flex-col gap-20 max-sm:gap-5 max-md:gap-10">
              <h1 className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl">
                Our Services
              </h1>
              {services.map(({ header, img, paragraph }) => (
                <ServiceFrameCol
                  header={header}
                  imgFile={img}
                  paragraph={paragraph}
                />
              ))}
            </div>
          </div>
        </section>
        <LetsShape />
        <Footer />
      </div>
    </>
  );
};

export default Service;
