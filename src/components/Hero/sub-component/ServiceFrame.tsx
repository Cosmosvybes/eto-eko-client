const ServiceFrame = ({
  header,
  paragraph,
  imgFile,
}: {
  header: string;
  paragraph: string;
  imgFile: string;
}) => {
  return (
    <>
      <div className=" w-2/4 h-fit  gap-[13px] mt-2  flex flex-col items-center justify-start ">
        <div className="">
          <img
            src={imgFile}
            alt="service photo"
            className="object-cover  rounded-full rounded-bl-none  w-[246px] h-[224px]"
          />
        </div>

        <div className="h-[230px]  flex-col flex justify-center gap-5 items-center">
          <h1 className="font-sans text-3xl text-center ">{header}</h1>
          <p className="text-center font-sans">{paragraph}</p>

          <button className=" px-3 w-1/3 py-4 bg-[#FF7700] text-white rounded-full">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceFrame;
