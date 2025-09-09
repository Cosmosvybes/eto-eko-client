const TestimonialMessage = ({
  user,
  country,
  degree,
  p1,
  p2,
}: {
  user: string;
  country: string;
  degree: string;
  p1: string;
  p2: string;
}) => {
  return (
    <>
      <div className="max-sm:border max-md:border rounded-lg border-gray-200 w-full h-auto flex justify-between items-center p-10 gap-10 max-sm:p-4 relative">
        <div className="relative -z-10  rounded-full rounded-bl-none  w-52 h-44 bg-[#074941] max-sm:absolute max-md:absolute top-2 right-0  max-sm:w-12 max-sm:h-12 max-md:h-20 max-md:w-20 max-sm:right-2 max-md:right-3 max-sm:top-3 ">
          <div className=" rounded-full rounded-bl-none absolute left-2 bottom-2 w-44 h-44 bg-[#FF7700] max-sm:h-12 max-sm:w-12 max-sm:left-1 max-md:left-1 max-sm:bottom-1  max-md:bottom-1  max-md:h-20 max-md:w-20 "></div>
        </div>
        <div className="h-auto w-full p-2 max-sm:p-0 ">
          <div className="h-auto flex gap-2 flex-col">
            <h1 className="font-normal text-2xl">{user}</h1>
            <p className="font-semibold">{country}</p>
            <p className="font-normal">{degree}</p>
            <hr className="border-t border-dashed " />
            <div className="flex-col flex  gap-2 mt-2">
              <p className="font-normal">{p1}</p>
              <p className="font-normal">{p2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialMessage;
