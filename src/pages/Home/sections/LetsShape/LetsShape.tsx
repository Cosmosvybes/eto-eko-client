const LetsShape = () => {
  return (
    <>
      <section className="h-screen mt-16  px-18 ">
        <div className="plane-bg flex justify-between mt-10 items-center rounded-lg">
          <div className="w-1/2 h-full    flex justify-start items-center p-10">
            <div className=" w-3/4 h-1/2 flex justify-start flex-col p-5 gap-4">
              <h1 className="font-bold text-5xl text-white font-sans">
                Let's Shape Your{" "}
              </h1>
              <h1 className="font-bold text-5xl text-white font-sans">
                Academic Future{" "}
              </h1>

              <div className="w-full  h-4/5 flex gap-7 flex-col justify-start mt-5">
                <p className="text-[18px] font-sans  font-medium text-white  ">
                  With Eto-Eko, your global education dreams are within reach.
                  We’re here to offer tailored advice and steadfast support
                  tailored to your unique aspirations.
                </p>
                <p className="text-[18px] font-sans  font-medium text-white  ">
                  Ready to embark on your journey? Fill out the form, and let’s
                  chart your path together.
                </p>
                <p className="text-[18px] font-sans  font-medium text-white  ">
                  {" "}
                  Don’t just dream, take action!
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full px-2 py-10">
            <div className="w-full  h-auto grid grid-cols-2 gap-10">
              {[
                { id: 1, name: "Firstname" },
                { id: 2, name: "Lastname" },
                { id: 3, name: "E-mail" },
                { id: 4, name: "Your current Location" },
                { id: 5, name: "Country You Wish to Study In " },
                { id: 6, name: "University of Interest" },
              ].map(({ id, name }) => (
                <label
                  htmlFor=""
                  className="flex flex-col w-full p-5 gap-4"
                  key={id}
                >
                  <b className="text-white font-medium text-xl font-sans">
                    {name}
                  </b>
                  <input
                    type="text"
                    className="border-b border-white outline-none hover:bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.06)]"
                  />
                </label>
              ))}
            </div>
            <div className="w-full flex-col ">
              {[
                { id: 1, name: "How do you plan to fund your studies ?" },
                {
                  id: 2,
                  name: "Do you have any question before we contact you ?",
                },
              ].map(({ name, id }) => (
                <label
                  htmlFor=""
                  className="flex flex-col w-full p-5 gap-14"
                  key={id}
                >
                  <b className="text-white font-medium text-xl font-sans">
                    {name}
                  </b>
                  <input
                    type="text"
                    className="border-b border-white outline-none hover:bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.06)]"
                  />
                </label>
              ))}
            </div>

            <div className="w-full flex-col px-3 py-3  ">
              {" "}
              <button className="w-[289px] rounded-full bg-amber-50 p-4 text-xl font-sans text-[#EF760C]">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsShape;
