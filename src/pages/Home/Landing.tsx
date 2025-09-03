import Corevalue from "./sections/core_values/Corevalue";
import Hero from "../../components/Hero/Hero";
import WhoWeAre from "./sections/WWA/WhoWeAre";
import WhatWeOffer from "./sections/WWO/WhatWeOffer";
import PartnerWithUs from "./sections/PartnerWithUs/PartnerWithUs";
import ReadyToJoin from "./sections/ReadyToJoin/ReadyToJoin";
import Testimonials from "./sections/Testimonials/Testimonials";
import LetsShape from "./sections/LetsShape/LetsShape";
import OurPartners from "./sections/our-partners/OurPartners";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <div className="h-auto">
        <Hero />
        <Corevalue />
        <WhoWeAre />
        <WhatWeOffer />
        <PartnerWithUs />
        <ReadyToJoin />
        <Testimonials />
        <LetsShape />
        <OurPartners />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
