const WhoWeAre = () => {
  return (
    <>
      <section className="h-screen  flex justify-between  mt-25 px-10 gap-10">
        <div className=" w-3/6 who-we-are-bg"></div>

        <div className=" w-3/6 flex justify-center  items-start flex-col gap-12">
          <h1 className="text-4xl font-medium font-sans">Who We Are!</h1>
          <p className="text-2xl font-sans font-normal">
            Etoeko International Edventures Ltd is a global education company
            dedicated to making international education accessible to students
            from every corner of the world. We specialize in recruiting students
            around the world from countries like Nigeria, India, and Nepal into
            prestigious higher education institutions in the UK, US, and beyond.
          </p>
          <p className="text-2xl font-sans font-normal">
            But we’re more than a recruitment agency we’re a change-driven
            consultancy, working with education providers, businesses, and
            governments to build inclusive, culturally agile, and
            policy-informed educational environments.
          </p>

          <p className="text-2xl font-sans font-normal">
            Our expert academic counsellors make the route to global education
            not only achievable but also exciting. 
          </p>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
