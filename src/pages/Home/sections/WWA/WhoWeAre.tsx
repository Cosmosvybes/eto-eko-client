const WhoWeAre = () => {
  return (
    <>
      <section className=" lg:h-auto flex justify-between max-sm:flex-col max-sm:items-start  mt-25 max-md:mt-0 px-10 gap-10 max-sm:gap-7 max-sm:px-5 max-sm:h-auto">
        <div className=" w-3/6 who-we-are-bg max-sm:w-full max-sm:h-[24rem] bg-scroll max-sm:bg-fixed max-sm:bg-cover max-sm:rounded-lg"></div>

        <div className=" w-3/6 flex justify-center max-sm:w-full  items-start flex-col gap-12 max-sm:gap-6 max-sm:items-start">
          <h1 className="text-4xl font-medium max-sm:text-center font-sans">
            Who We Are!
          </h1>
          <p className="font-normal text-xl font-sans ">
            Etoeko International Edventures Ltd is a global education company
            dedicated to making international education accessible to students
            from every corner of the world. We specialize in recruiting students
            around the world from countries like Nigeria, India, and Nepal into
            prestigious higher education institutions in the UK, US, and beyond.
          </p>
          <p className="font-normal text-xl font-sans l">
            But we’re more than a recruitment agency we’re a change-driven
            consultancy, working with education providers, businesses, and
            governments to build inclusive, culturally agile, and
            policy-informed educational environments.
          </p>

          <p className="font-normal text-xl font-sans ">
            Our expert academic counsellors make the route to global education
            not only achievable but also exciting. 
          </p>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
