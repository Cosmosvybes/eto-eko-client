import { motion } from "framer-motion";

import { Outlet } from "react-router-dom";
import RatingStars from "../components/Ratings/RatingStars";
import { useLayoutController } from "./controller.layout";
import { MdCloseFullscreen } from "react-icons/md";
import Formbuilder from "../components/Formbuilder/Formbuilder";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    showFeedBack,
    loading,
    rating,
    handlRatingChange,
    setShowFeedBack,
    handleFormChange,
    handleFormSubmit,
    formValues,
    formFields,
  } = useLayoutController();
  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center z-20 fixed top-0 right-0 left-0 bg-[rgba(0,0,0,0.18)]">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5, type: "tween", ease: "backIn" }}
        exit={{ opacity: 0 }}
        className={`fixed z-30 flex ${
          !showFeedBack
            ? "invisble translate-y-11/12 scale-0 opacity-0 inset-0 delay-1000"
            : "scale-100  visible"
        }  justify-center items-center top-0 bottom-0 right-0 transition duration-700 left-0 bg-[rgba(0,0,0,0.18)] max-sm:py-20 max-md:px-5 max-sm:px-2`}
      >
        <motion.div className="lg:w-2/3 bg-amber-600 rounded-lg lg:h-2/3 max-sm:w-full flex p-1 py-20 justify-center items-center flex-col relative  max-md:w-full max-sm:h-auto">
          <MdCloseFullscreen
            onClick={() => setShowFeedBack(!showFeedBack)}
            className="absolute top-5 right-2.5 text-3xl"
          />

          <div className="w-full p-2  flex-col mb-5">
            <Formbuilder
              formValues={formValues}
              formFields={formFields}
              handleFormChange={handleFormChange}
            />
            <button
              onClick={handleFormSubmit}
              className="w-full rounded-full bg-amber-50 text-shadow-2xs p-4 text-xl font-sans text-[#074941]"
            >
              Send
            </button>
          </div>

          <RatingStars
            rating={rating}
            setRating={handlRatingChange}
            isShowingFeedback={showFeedBack}
          />
        </motion.div>
      </motion.div>

      <div>
        <Outlet /> {children}
        <div
          className={`fixed justify-center  transition duration-300 ${
            showFeedBack ? "invisble scale-0" : "scale-100 visible"
          }   rounded-lg flex flex-col bottom-10  w-44 border-[#074941] border-5 h-auto items-center bg-amber-600 right-2`}
        >
          <p className="text-white text-sm">give us</p>
          <motion.button
            className="w-full text-shadow-2xs  text-white p-2"
            onClick={() => setShowFeedBack(!showFeedBack)}
          >
            {" "}
            FEEDBACK
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Layout;
