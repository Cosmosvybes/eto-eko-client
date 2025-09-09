import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const DynamicHero = ({
  title,
  paragraph,
  bg,
}: {
  title: string;
  paragraph: string;
  bg: string;
}) => {
  return (
    <>
      <div className="lg:h-[44rem] flex relative  max-md:h-auto  max-sm:py-10 justify-between items-center lg:px-20 max-sm:h-auto max-sm:items-start max-sm:flex-col">
        <div className="lg:w-2/5 flex gap-3 justify-center items-center max-sm:w-full max-md:w-full">
          <div className="lg:w-2/3    lg:h-2/3 px-10 max-sm:w-full max-sm:px-2  max-md:px-2 ">
            <h1 className="lg:text-[3rem] max-md:text-[2rem] text-[#FF7700] ">
              {title}
            </h1>
            <p className="font-medium text-xl  font-sans">
              {paragraph}
              {/* Learn more about Etoeko. */}
            </p>

            <hr className="border-t border-black border-dashed  w-full mt-4" />

            <div className="w-full flex justify-center items-center mt-2">
              <p className="w-1/2 font-light">Follow us</p>

              <div className="  flex w-full items-center justify-end gap-4 ">
                <RiTwitterXFill className="text-4xl text-black" />
                <FaInstagramSquare className="text-4xl text-black" />
                <FaLinkedin className="text-4xl text-black" />
                <FaFacebook className="text-4xl text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5  h-full flex max-sm:mt-5  justify-center max-md:px-2 items-start max-md:w-7/9  max-sm:w-full max-sm:px-2 max-sm:h-[32rem] max-md:h-[44rem]">
          <div className={`w-full h-full ${bg}`}></div>

          {/* <div className="w-full  h-full grid grid-cols-4 gap-1 lg:px-0 max-sm:px-2  max-md:px-2">
            {["top-left", "top-right", "bottom-left", "bottom-right"].map(
              (pos, i) => (
                <div
                  key={i}
                  className={`w-full ${bg}  h-full  ${pos} ${
                    i % 2 == 1 ? "mt-10 " : "mb-10"
                  } `}
                ></div>
              )
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DynamicHero;
