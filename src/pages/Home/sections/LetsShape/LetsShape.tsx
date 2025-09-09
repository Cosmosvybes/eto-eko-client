import { useState } from "react";
import Formbuilder from "../../../../components/Formbuilder/Formbuilder";

const LetsShape = () => {
  const formFields_1 = [
    { id: 1, name: "Firstname", type: "text", value: "" },
    { id: 2, name: "Lastname", type: "text", value: "" },
    { id: 3, name: "E-mail", type: "email", value: "" },
    { id: 4, name: "Your current Location", type: "text", value: "" },
    { id: 5, name: "Country You Wish to Study In", type: "text", value: "" },
    { id: 6, name: "University of Interest", type: "text", value: "" },
  ];

  const formFields_2 = [
    {
      id: 7,
      name: "How do you plan to fund your studies ?",
      type: "text",
      value: "",
    },
    {
      id: 8,
      name: "Do you have any question before we contact you ?",
      type: "text",
      value: "",
    },
  ];
  const values_1 = formFields_1.reduce((acc, curr) => {
    return { ...acc, [curr.name]: curr.value };
  }, {});

  const values_2 = formFields_2.reduce((acc, curr) => {
    return { ...acc, [curr.name]: curr.value };
  }, {});

  const [formValues, setFormValues] = useState({ ...values_1, ...values_2 });

  const handleFormChange = (newValue: string, name: string) => {
    setFormValues((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleFormSubmit = () => {
    console.log(formValues);
  };

  return (
    <>
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
