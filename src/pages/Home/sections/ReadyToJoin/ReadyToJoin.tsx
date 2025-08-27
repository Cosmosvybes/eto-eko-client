const ReadyToJoin = () => {
  return (
    <>
      <section className=" h-screen  sunshine p-20 flex flex-col gap-10 justify-center items-start">
        <div className="w-3/6 flex flex-col gap-6 text-white">
          <h1 className="text-6xl">Ready to Start</h1>
          <h1 className="text-6xl">Your Study Abroad Journey? </h1>
          <h1 className="text-6xl">Let's Begin!</h1>
        </div>{" "}
        <div className="w-3/6  text-white">
          <p className="text-2xl font-sans font-medium">
            We believe education should be accessible, inclusive, and globally
            enriching. Whether you're a student dreaming of studying abroad or
            an institution striving for a more inclusive international student
            experience, Etoeko is here to help you thrive.
          </p>
        </div>
        <button className="w-[250px] rounded-full px-3 bg-[#FF7700] text-white p-4 font-sans">
          Read more{" "}
        </button>
      </section>
    </>
  );
};

export default ReadyToJoin;
