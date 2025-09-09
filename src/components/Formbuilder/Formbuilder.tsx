const Formbuilder = ({
  formFields,
  handleFormChange,
  formValues,
}: {
  formFields: {
    type: string;
    value: string;
    name: string;
  }[];
  handleFormChange(name: string, value: string): void;
  formValues: { [key: string]: string };
}) => {
  const FORM = formFields.map(({ type, name }) => {
    switch (type) {
      case "textarea":
        return (
          <label
            key={name}
            htmlFor=""
            className="flex flex-col lg:ml-4 w-full gap-2 mt-5"
          >
            <b className="text-white font-medium text-xl font-sans">Message</b>
            <textarea
              value={formValues[name]}
              onChange={(e) => handleFormChange(e.target.value, name)}
              placeholder="Enter your message here..."
              className="border-b border-[#EF760C] outline-none  hover:bg-gradient-to-b from-transparent h-40 text-white to-[rgba(255,255,255,0.06)]"
            />
          </label>
        );

      case "email":
        return (
          <label
            htmlFor=""
            className="flex flex-col w-full p-5 max-sm:p-2 gap-4"
          >
            <b className="text-white font-medium lg:text-sm font-sans">
              {name}
            </b>
            <input
              value={formValues[name]}
              onChange={(e) => handleFormChange(e.target.value, name)}
              type="text"
              className="border-b border-white outline-none hover:bg-gradient-to-b from-transparent text-white to-[rgba(255,255,255,0.06)]"
            />
          </label>
        );
      default:
        return (
          <label
            htmlFor=""
            className="flex  flex-col w-full p-5 max-sm:p-2 gap-4"
          >
            <b className="text-white font-medium lg:text-sm font-sans">
              {name}
            </b>
            <input
              value={formValues[name]}
              onChange={(e) => handleFormChange(e.target.value, name)}
              type="text"
              className="border-b border-white  outline-none hover:bg-gradient-to-b from-transparent text-white to-[rgba(255,255,255,0.06)]"
            />
          </label>
        );
    }
  });
  return <>{FORM}</>;
};

export default Formbuilder;
