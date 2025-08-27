const Testimonials = () => {
  return (
    <>
      <div className="h-screen  flex justify-start px-18 items-center py-16 flex-col mt-10">
        <h1 className="text-4xl">Testimonials</h1>

        <div className="h-auto w-full   grid grid-cols-3 gap-5 mt-14">
          {[
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
          ].map(({ name, country, message, discipline }, i) => (
            <div className=" w-full">
              <div
                key={name}
                className={` h-[36rem] rounded-lg  bg-[#FF7700] relative ${
                  i % 2 === 1 ? "rotate-x-180" : "rotate-0"
                }  `}
              >
                <div className="absolute w-3/4 -z-20 flex justify-center items-center rounded-full h-3/4 place-items-center bg-white right-3.5 top-2">
                  <div className="w-full h-44  absolute place-content-center ">
                    <p
                      className={`justify-self-center p-10 font-sans  ${
                        i % 2 === 1 ? "rotate-x-180" : "rotate-0"
                      }  `}
                    >
                      {message}
                    </p>
                  </div>
                </div>

                <div className="absolute w-52 rounded-2xl  bottom-6 -rotate-270 h-36   bg-white right-20"></div>
              </div>

              <div className="h-24 flex justify-center items-center flex-col z-10  mt-2 gap-2">
                <b className="font-bold font-2xl font-sans">{name}</b>
                <h2 className="font-medium">{country}</h2>
                <p className="font-sans font-normal">{discipline}</p>
              </div>
            </div>
          ))}
        </div>

        <button className=" px-3 w-44 py-4 mt-7 bg-[#FF7700] text-white rounded-full">
          See More
        </button>
      </div>
    </>
  );
};

export default Testimonials;
