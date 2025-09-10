import Formbuilder from "../../../../components/Formbuilder/Formbuilder";
import { Toaster } from "react-hot-toast";

import { useLetsShapeController } from "./controller";

const LetsShape = () => {
  const {
    loading,
    formFields_1,
    formFields_2,
    handleFormChange,
    handleFormSubmit,
    formValues,
  } = useLetsShapeController();
  return (
    <>
      {loading && (
        <div className="w-full h-full flex justify-center items-center z-20 fixed top-0 right-0 left-0 bg-[rgba(0,0,0,0.4)]">
          <div className="loader"></div>
        </div>
      )}

      <Toaster />
      <section className="lg:h-auto mt-16  max-md:px-10 px-18 max-sm:px-2 max-sm:h-auto max-md:h-auto ">
        <div className="plane-bg flex justify-between mt-10 items-start rounded-lg max-md:flex-col  max-sm:flex-col">
          <div className="w-1/2 h-full  flex justify-start items-start p-10 max-sm:p-2 max-sm:w-full max-md:w-full  max-md:h-auto">
            <div className=" w-3/4 h-1/2 flex justify-start flex-col p-5 max-sm:p-0.5 gap-4 max-sm:w-full max-md:w-full  max-md:h-auto max-sm:h-auto">
              <h1 className="font-bold lg:text-3xl max-sm:text-2xl text-white font-sans">
                Let's Shape Your{" "}
              </h1>
              <h1 className="font-bold lg:text-3xl max-sm:text-2xl text-white font-sans">
                Academic Future{" "}
              </h1>

              <div className="w-full  h-4/5 flex gap-7 flex-col justify-start mt-5  max-sm:h-auto">
                <p className="text-[18px] font-sans  font-normal lg:font-medium text-white  ">
                  With Eto-Eko, your global education dreams are within reach.
                  We’re here to offer tailored advice and steadfast support
                  tailored to your unique aspirations.
                </p>
                <p className="text-[18px] font-sans  font-normal lg:font-medium text-white  ">
                  Ready to embark on your journey? Fill out the form, and let’s
                  chart your path together.
                </p>
                <p className="text-[18px] font-sans  font-normal lg:font-medium text-white  ">
                  {" "}
                  Don’t just dream, take action!
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full px-2 py-10 max-sm:w-full max-md:w-full  max-md:h-auto">
            <div className="w-full   h-auto grid grid-cols-2 gap-10 max-sm:gap-5 max-sm:p-0 max-md:p-5 max-md:grid-cols-1 max-sm:grid-cols-1">
              {
                <Formbuilder
                  formFields={formFields_1}
                  handleFormChange={handleFormChange}
                  formValues={formValues}
                />
              }
            </div>
            <div className="w-full flex-col ">
              {
                <Formbuilder
                  formFields={formFields_2}
                  handleFormChange={handleFormChange}
                  formValues={formValues}
                />
              }
            </div>

            <div className="w-full flex-col px-3 py-3  ">
              {" "}
              <button
                onClick={handleFormSubmit}
                className="w-[289px] rounded-full bg-amber-50 p-4 text-xl font-sans text-[#EF760C]"
              >
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
