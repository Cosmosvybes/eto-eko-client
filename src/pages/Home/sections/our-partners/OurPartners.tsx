import { partnersAsset } from "../../../../components/constants";

const OurPartners = () => {
  return (
    <>
      <div className="lg:h-auto max-md:h-auto flex py-3 items-center relative flex-col mt-4 max-sm:mt-6 mb-4 max-sm:mb-2  ">
        <h1 className="text-4xl font-medium max-sm:text-center font-sans max-sm:text-2xl">
          Our Partners
        </h1>
        <div className="w-full lg:h-auto max-sm:h-auto max-md:h-auto mt-10 max-sm:mt-2 max-md:mt-0 overflow-x-scroll flex justify-evenly gap-20 px-10 items-center">
          {partnersAsset.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt="Our partner"
              className="w-48 h-20 object-cover  shadow-sm rounded-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurPartners;
