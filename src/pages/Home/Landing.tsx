import Corevalue from "./core_values/Corevalue";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/navs/Navbar";
import WhoWeAre from "./WWA/WhoWeAre";
import WhatWeOffer from "./WWO/WhatWeOffer";

const Landing = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <Corevalue />
        <WhoWeAre />
        <WhatWeOffer />
      </div>
    </>
  );
};

export default Landing;
