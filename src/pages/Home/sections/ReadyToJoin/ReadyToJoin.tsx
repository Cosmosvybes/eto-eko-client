import { Link } from "react-router-dom";

const ReadyToJoin = () => {
  return (
    <>
      <section className=" h-screen max-sm:h-auto bg-scroll max-sm:bg-scroll  sunshine p-20 flex flex-col gap-10 justify-center items-start max-sm:p-2">
        <div className="w-3/6 flex flex-col gap-6 text-white max-sm:w-full max-md:w-full max-sm:items-start max-sm:gap-2">
          <h1 className="lg:text-3xl max-sm:text-2xl max-md:text-4xl">
            Ready to Start
          </h1>
          <h1 className="lg:text-3xl max-sm:text-2xl max-md:text-4xl">
            Your Study Abroad Journey? 
          </h1>
          <h1 className="lg:text-3xl max-sm:text-2xl max-md:text-4xl">
            Let's Begin!
          </h1>
        </div>{" "}
        <div className="w-3/6  text-white max-sm:w-ful max-md:w-full">
          <p className="lg:text-xl max-sm:text-xl font-sans font-normal">
            We believe education should be accessible, inclusive, and globally
            enriching. Whether you're a student dreaming of studying abroad or
            an institution striving for a more inclusive international student
            experience, Etoeko is here to help you thrive.
          </p>
        </div>
        <Link
          to="/our-services"
          className="rounded-full bg-[#FF7700] text-white text-center font-medium p-3 lg:w-1/7 max-md:w-1/2 max-sm:w-1/2 "
        >
          Read more{" "}
        </Link>
      </section>
    </>
  );
};

export default ReadyToJoin;
