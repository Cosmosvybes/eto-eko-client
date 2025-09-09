import { useEffect, useState } from "react";
import DynamicHero from "../../components/Hero/sub-component/DynamicHero";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { BiCaretUp } from "react-icons/bi";
import TestimonialMessage from "./Message/TestimonialMessage";
import ServiceCard from "../../components/ServicesCard/ServiceCard";
import Footer from "../../components/footer/Footer";
import news from "../../assets/news.jpg";
import business from "../../assets/business.jpg";
import map from "../../assets/map.jpg";

const Testimonials = () => {
  let images = [news, business, map];

  const [testimonials] = useState([
    {
      id: 1,
      user: "Adenike Folashade",
      country: "Nigeria",
      degree:
        "Master’s Student in Public Health at York St john University, UK.",
      p1: `Coming from Nigeria, I was worried about whether studying abroad
                would align with my career back home. Their team not only helped
                me secure admission but also guided me on how my studies could
                address real challenges in my community. It felt like they
                understood both worlds—global opportunities and local realities.`,
      p2: ` Going to that fair had been a decisive factor in making my final
                choice. Three months later, I received an offer from King's
                College London, one of the top 20 universities in the world. I
                couldn't believe it, but I'd made it!`,
    },
    {
      id: 2,
      user: "Gandaki, Karnali",
      country: "Nepal",
      degree:
        "Master’s Student in Public Health at York St john University, UK.",
      p1: `Coming from Nepal, I was worried about whether studying abroad
                would align with my career back home. Their team not only helped
                me secure admission but also guided me on how my studies could
                address real challenges in my community. It felt like they
                understood both worlds—global opportunities and local realities.`,
      p2: ` Going to that fair had been a decisive factor in making my final
                choice. Three months later, I received an offer from King's
                College London, one of the top 20 universities in the world. I
                couldn't believe it, but I'd made it!`,
    },
    {
      id: 3,
      user: "Put Ankeet Singh",
      country: "India",
      degree:
        "Master’s Student in Public Health at York St john University, UK.",
      p1: `Coming from India, I was worried about whether studying abroad
                would align with my career back home. Their team not only helped
                me secure admission but also guided me on how my studies could
                address real challenges in my community. It felt like they
                understood both worlds—global opportunities and local realities.`,
      p2: ` Going to that fair had been a decisive factor in making my final
                choice. Three months later, I received an offer from King's
                College London, one of the top 20 universities in the world. I
                couldn't believe it, but I'd made it!`,
    },
    {
      id: 4,
      user: " Lumbini Madhesh",
      country: "Nepal",
      degree:
        "Master’s Student in Public Health at York St john University, UK.",
      p1: `Coming from Nepal, I was worried about whether studying abroad
                would align with my career back home. Their team not only helped
                me secure admission but also guided me on how my studies could
                address real challenges in my community. It felt like they
                understood both worlds—global opportunities and local realities.`,
      p2: ` Going to that fair had been a decisive factor in making my final
                choice. Three months later, I received an offer from King's
                College London, one of the top 20 universities in the world. I
                couldn't believe it, but I'd made it!`,
    },
  ]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scaleX,
    [0, 1],
    ["rgba(7, 73, 65, 1)", "rgba(255, 119, 0, 1)"]
  );

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
          title="Testimonials"
          paragraph="Learn more about Etoeko"
          bg="testimonial-bg"
        />

        <section className="lg:h-auto max-sm:w-full  max-md:h-auto mt-20 max-sm:mt-14 max-md:mt-16  w-full">
          <div className="w-11/12 h-full max-md:w-12/13  flex justify-between max-sm:w-full max-sm:flex-col ">
            <div className="w-10/12 h-full block  max-md:px-14  lg:px-24 lg:py-0 max-sm:px-2 max-sm:w-full max-md:w-full ">
              <h1 className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl">
                Testimonials
              </h1>
              <div className="gap-2 flex flex-col mt-2 ">
                {testimonials.map(({ user, country, p1, p2 }) => (
                  <TestimonialMessage
                    user={user}
                    country={country}
                    // degree={degree}
                    p1={p1}
                    p2={p2}
                  />
                ))}
              </div>
            </div>

            <div className="w-2/12 h-full max-md:w-5/12 max-sm:px-6   max-sm:w-full max-sm:mt-5  px-5 max-md:px-4">
              <b className="font-bold text-xl max-md:text-xl max-sm:font-bold">
                Discover more
              </b>{" "}
              <ul className="gap-3 flex flex-col mt-2">
                <li className="flex lg:font -normal  justify-start  max-md:text-xl items-center max-sm:font-normal">
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

        <section className="lg:h-auto bg-[#FF7700] lg:p-20 max-sm:p-2 max-sm:mt-5">
          <h1 className="text-center text-2xl font-3xl">Latest News</h1>
          <div className="h-full  w-full grid grid-cols-3 mt-8 max-sm:grid-cols-1  max-sm:mt-4">
            {images.map((_) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
                className=" flex w-full flex-col items-center justify-center p-10 max-sm:p-2 gap-5"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
                  className="h-44 w-44  flex justify-center items-center relative p-5 "
                >
                  <div className="h-full w-full polygon   rounded-full bg-[#F4BD0A] relative">
                    <div
                      className={`h-full w-full border polygon rounded-full  absolute -right-2 -top-2`}
                    >
                      <img
                        src={_}
                        alt="news image"
                        className="w-full h-full absolute"
                      />
                    </div>
                  </div>
                </motion.div>

                <h2 className="font-semibold text-[24px] text-center ">
                  How does the UK Education works ?
                </h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "tween", ease: "backIn", duration: 0.5 }}
                  className="h-auto w-full  p-2 items-center flex justify-center item"
                >
                  <p className="p-4 max-sm:p-0 font-normal text-[16px font-sans">
                    Are you passionate about transforming students’ lives
                    through education? We’re looking for dedicated professionals
                    who share our commitment to excellence in educational
                    guidance.
                  </p>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "tween",
                    ease: "anticipate",
                    duration: 1,
                  }}
                  className="w-1/2 bg-white rounded-full font-semibold p-3"
                >
                  {" "}
                  See More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        <ServiceCard />
        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
