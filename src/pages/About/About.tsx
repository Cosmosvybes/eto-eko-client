import PartnerWithUs from "../Home/sections/PartnerWithUs/PartnerWithUs";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

import { BiCaretUp } from "react-icons/bi";

import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

import { MdShareLocation } from "react-icons/md";
import DynamicHero from "../../components/Hero/sub-component/DynamicHero";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Formbuilder from "../../components/Formbuilder/Formbuilder";
import { useAboutController } from "./controller";
import ServiceCard from "../../components/ServicesCard/ServiceCard";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function About() {
  const {
    formFields,
    handleFormChange,
    handleFormSubmit,
    formValues,
    formFields_2,
  } = useAboutController();

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
          title="About Us"
          paragraph="Learn more about Etoeko"
          bg="about-us"
        />

        <section className="h-[60rem] max-sm:w-full max-md:h-auto mt-20 max-sm:mt-14 max-md:mt-16  w-full">
          <div className="w-11/12 h-full flex justify-between max-sm:w-full max-sm:flex-col ">
            <div className="w-10/12 h-full block  max-md:px-14  lg:px-24 lg:py-18 max-sm:px-4 max-sm:w-full max-md:w-full ">
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
                  Who We Are !
                </motion.h1>{" "}
              </div>
              <div className=" flex flex-col gap-5 mt-4">
                <p className="font-normal">
                  Etoeko International Edventures Ltd is a global education
                  company dedicated to making international education accessible
                  to students from every corner of the world. We specialize in
                  recruiting students around the world from countries like
                  Nigeria, India, and Nepal into prestigious higher education
                  institutions in the UK, US, and beyond.
                </p>

                <p className="font-normal">
                  But we’re more than a recruitment agency we’re a change-driven
                  consultancy, working with education providers, businesses, and
                  governments to build inclusive, culturally agile, and
                  policy-informed educational environments.
                </p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Global Reach, Local Expertise
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <p className="font-normal">
                  We connect students and institutions across borders with
                  insight into local challenges and aspirations.
                </p>

                <p className="font-normal">
                  We believe education is a global language, but one that must
                  be spoken with local understanding. By bridging institutions,
                  cultures, and students across borders, we ensure that
                  opportunities abroad remain relevant and responsive to local
                  aspirations. Our knowledge of regional challenges allows us to
                  guide students with strategies that fit their unique context,
                  while helping institutions engage meaningfully with diverse
                  communities worldwide.
                </p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Ethical, Student-Centric Recruitment
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <p className="font-normal">
                  Our processes are transparent, supportive, and driven by
                  student success, not just numbers.
                </p>

                <p className="font-normal">
                  For us, recruitment is not about numbers—it’s about futures.
                  Every process we design is transparent, ethical, and built
                  around the individual student’s goals. We walk alongside
                  students with care and integrity, ensuring that their
                  decisions are well-informed and in their best interest.
                  Success, to us, is measured not just by enrollment, but by the
                  long-term personal and academic growth of the students we
                  support.
                </p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Inclusive by Design
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <p className="font-normal">
                  Inclusion isn’t an add-on; it’s embedded in our DNA. From the
                  way we write policies to the way we build partnerships, every
                  action is guided by a commitment to equity and belonging. We
                  actively create pathways for underrepresented students, foster
                  inclusive classroom environments, and champion diversity at
                  every level of engagement. For us, inclusion is both a
                  principle and a practice.
                </p>
              </div>

              <h1 className="text-[24px] font-semibold mt-5">
                Experienced & Mission-Led Team
              </h1>
              <div className=" flex flex-col gap-5 mt-4">
                <p className="font-normal">
                  Our consultants and advisors come from diverse backgrounds in
                  higher education, international affairs, and cultural policy.
                </p>

                <p className="font-normal">
                  Our strength lies in the people behind our mission. With
                  backgrounds spanning higher education, international
                  relations, cultural policy, and student advisory services, our
                  team brings both depth and diversity of expertise. More than
                  professionals, we are advocates for students—driven by a
                  shared vision of making global education accessible, ethical,
                  and transformative.
                </p>
              </div>
            </div>
            <div className="w-2/12 h-full  max-sm:w-full max-sm:mt-5  px-5">
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
          </div>
        </section>

        <ServiceCard />

        <section className="w-full lg:h-auto lg:px-20 mb-20 max-sm:h-auto max-md:h-auto max-sm:px-2 max-md:px-4  max-sm:mb-14 max-md:mb-14 ">
          <div className="w-full h-full max-sm:h-auto max-md:h-auto  flex justify-between items-center rounded-lg laptop-bg p-2 max-sm:flex-col max-md:flex-col">
            <div className="w-2/5 h-full lg:p-20 rounded-lg bg-[#EF760C] max-sm:w-full max-md:w-full max-sm:h-1/2  max-sm:p-2 max-md:p-4">
              <p className="lg:text-xl max-sm:text-2xl max-sm:font-bold  max-md:text-2xl max-md:font-bold font-sans font-normal text-white ml-1 flex justify-start gap-4 items-center">
                <FaLongArrowAltRight className="inline" /> Contact Information
              </p>

              <div className="w-full lg:h-[24rem] max-sm:py-4  max-sm:h-auto max-md:h-auto flex justify-start py-20  gap-5 flex-col items-center  px-2">
                <div className="flex gap-5 justify-start items-center  text-white w-full">
                  <BsTelephoneFill className="lg:text-3xl text-white " />{" "}
                  <p className="font-8xl font-sans">+234 8140242752</p>
                </div>

                <div className="flex gap-5 justify-start items-center  text-white w-full">
                  <BsEnvelopeFill className="lg:text-3xl text-white " />{" "}
                  <p className="font-8xl font-sans">info@etoeko.co.uk</p>
                </div>

                <div className="flex gap-5 justify-start items-center  text-white w-full">
                  <MdShareLocation className="lg:text-3xl text-white " />{" "}
                  <p className="font-8xl font-sans">London, Uk</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start py-10 items-center w-full h-full ">
              <div className=" w-4/5 grid grid-cols-2 px-10 max-sm:px-2 max-md:px-4 max-sm:w-full max-md:w-full max-sm:grid-cols-1  gap-10 ">
                {
                  <Formbuilder
                    formFields={formFields}
                    formValues={formValues}
                    handleFormChange={handleFormChange}
                  />
                }
              </div>
              <div className=" w-4/5 grid grid-cols-1 px-10 max-sm:px-2 max-md:px-4 mt-8   max-sm:w-full max-md:w-full max-sm:grid-cols-1  gap-10 ">
                <Formbuilder
                  formFields={formFields_2}
                  formValues={formValues}
                  handleFormChange={handleFormChange}
                />

                <div className="w-full flex-col  py-3  ">
                  {" "}
                  <button
                    onClick={handleFormSubmit}
                    className="w-[289px] rounded-full bg-amber-50 p-4 text-xl font-sans text-black"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PartnerWithUs />
        <Footer />
      </div>
    </>
  );
}
