import { useState } from "react";
import toast from "react-hot-toast";
import { inquiryUrl } from "../../../../components/constants";

export const useLetsShapeController = () => {
  const [loading, setLoading] = useState(false);

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

  const handleFormSubmit = async () => {
    const hasUnfilledInput = Object.values(formValues).find(
      (textInput) => textInput == ""
    );
    // console.log(hasUnfilledInput, formValues);

    if (hasUnfilledInput == "") {
      toast("Missing input area");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(inquiryUrl, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ ...formValues }),
      });
      const result = await response.json();
      console.log(result);
      toast(result.responseMessage);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast("Connection error");
    }
  };

  return {
    formFields_1,
    formFields_2,
    handleFormChange,
    handleFormSubmit,
    loading,
    formValues,
  };
};
