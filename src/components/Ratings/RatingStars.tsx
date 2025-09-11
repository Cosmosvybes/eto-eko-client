import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const RatingStars = ({
  rating,
  setRating,
  isShowingFeedback,
}: {
  rating: any;
  isShowingFeedback: boolean;
  setRating(rating: number): void;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h1
          className={`text-[#074941] text-xl font-sans   ${
            !isShowingFeedback
              ? "invisble  translate-y-full scale-0 delay-500"
              : "scale-100 delay-500 visible translate-y-0 scale-3d"
          }`}
        >
          Rate Us
        </h1>
        <div className="flex justify-center items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.span initial={{ scale: 1 }} whileTap={{ scale: 2 }}>
              <FaStar
                onClick={() => setRating(star)}
                className={`${
                  rating >= star ? "text-[#074941]" : "text-black"
                }  text-3xl delay-500 duration-700 transition-all  ${
                  !isShowingFeedback
                    ? "invisble  translate-y-full scale-0 delay-500"
                    : "scale-100 visible translate-y-0"
                }`}
              />
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
};

export default RatingStars;
