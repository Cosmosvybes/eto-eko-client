import Corevalue from "./core_values/Corevalue";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/navs/Navbar";

const Landing = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <Corevalue />
      </div>
    </>
  );
};

export default Landing;
