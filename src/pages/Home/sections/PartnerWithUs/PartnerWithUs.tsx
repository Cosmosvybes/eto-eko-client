const PartnerWithUs = () => {
  return (
    <>
      <section className="partner-w-us h-auto max-sm:h-auto max-md:-mt-10 max-sm:mt-10 flex justify-center items-center max-md:mb-10  mb-10 relative max-sm:w-full">
        <div className=" h-auto max-sm:h-auto max-md:h-auto w-4/5 max-sm:w-full flex gap-10 justify-center flex-col items-center">
          {" "}
          <h1 className="text-4xl font-medium text-[#074941]  max-sm:text-center font-sans max-sm:text-2xl">
            Partner With Us
          </h1>
          <div className="justify-center items-center flex flex-col max-sm:px-8">
            <p className="font-normal text-xl text-[#074941]  text-center">
              Are you and education provider looking to diversify your student
              base ?
            </p>
            <p className="font-normal text-xl text-[#074941] text-center">
              A Gorvernment or ministries building strategies for inclusive
              global education ?
            </p>
            <p className="font-normal text-[#074941] text-xl text-center">
              Or an agent looking to work a trusted global eduction provider ?{" "}
            </p>
          </div>
          <p className="font-normal text-xl max-sm:mb-3 text-[#074941]">Let's collaborate.</p>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;
