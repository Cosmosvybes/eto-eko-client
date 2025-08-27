import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import PartnerWithUs from "../Home/sections/PartnerWithUs/PartnerWithUs";
import Footer from "../../components/footer/Footer";
export default function About() {
  return (
    <>
      <div className="h-screen flex relative  justify-between items-center">
        <div className="w-2/5 flex gap-3 justify-center items-center">
          <div className="w-2/3  h-2/3 px-20">
            <h1 className="text-[4rem] text-[#FF7700] ">About Us</h1>
            <p className="font-medium text-xl font-sans">
              Learn more about Etoeko.
            </p>

            <hr className="border-t border-black  w-full mt-2" />

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

        <div className="w-3/5 border h-full"></div>
      </div>

      <PartnerWithUs />
      <Footer />
    </>
  );
}
