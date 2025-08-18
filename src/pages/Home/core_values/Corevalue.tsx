import { useState } from "react";

const Corevalue = () => {
  const [values] = useState([
    {
      id: 1,
      header: "Our Vision",
      content: `A world where every student, regardless of background, has 
access to transformative international education and every institution 
is equipped to support them meaningfully.`,
    },
    {
      id: 2,
      header: "Our Mission",
      content: `To create pathways to global education for students and help institutions foster environments where diversity and inclusion are more than buzzwords they’re a way of life.`,
    },
    {
      id: 3,
      header: "Our Motto",
      content: `...Taking you places.`,
    },
  ]);

  return (
    <>
      <div className="h-[750px] px-36">
        <div className="  h-full flex justify-center px-10 py-10 core-bg">
          <div className="w-[493px] h-[147px] flex items-center py-5 flex-col ">
            <h1 className="text-4xl font-bold">Our Core</h1>
            <h2 className="text-2xl text-center font-sans font-normal">
              Transforming Dreams into Global Educational Success
            </h2>
          </div>

          <div className="absolute w-full  bottom-0 h-[600px] py-10 px-10  flex justify-between z-10 gap-8">
            {values.map(({ id, header, content }, i) => (
              <div
                className={`w-1/3 ${
                  i % 2 === 0 ? "h-[490px] mt-10" : "h-[550px]"
                } flex px-10 justify-center gap-3 items-center flex-col z-20 bg-[#3DDFFF33]`}
                key={id}
              >
                <h1 className="text-3xl font-bold text-[#0093B1]">{header}</h1>
                <p className="font-sans text-[#0093B1] text-xl text-center">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Corevalue;
