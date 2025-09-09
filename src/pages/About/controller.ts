import { useState } from "react";

export function useAboutController() {
  const formFields = [
    { id: 1, name: "Your name", type: "text", value: "" },
    { id: 2, name: "Phone", type: "text", value: "" },
  ];

  const formFields_2 = [
    { id: 1, name: "Email", type: "text", value: "" },
    { id: 2, name: "Message", type: "textarea", value: "" },
  ];
  const values_1 = formFields.reduce((acc, curr) => {
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

  return {
    formFields,
    handleFormChange,
    handleFormSubmit,
    formValues,
    formFields_2,
  };
}
