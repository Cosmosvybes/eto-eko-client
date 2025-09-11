import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { quickContactUrl } from "../components/constants";
import toast from "react-hot-toast";

export const useLayoutController = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [showFeedBack, setShowFeedBack] = useState(false);

  const [initialRating, seInitialRating] = useState(0);
  const handlRatingChange = (newValue: number) => {
    seInitialRating(newValue);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    () => clearTimeout(timer);
  }, [location]);

  const formFields = [
    { id: 1, name: "Fullname", type: "text", value: "" },
    { id: 1, name: "Email", type: "text", value: "" },
    { id: 2, name: "Message", type: "textarea", value: "" },
  ];

  const values = formFields.reduce((acc, curr) => {
    return { ...acc, [curr.name]: curr.value };
  }, {});
  const [formValues, setFormValues] = useState({ ...values });

  const handleFormChange = (newValue: string, name: string) => {
    setFormValues((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleFormSubmit = async () => {
    const hasUnfilledInput = Object.values(formValues).find(
      (textInput) => textInput == ""
    );

    if (hasUnfilledInput == "") {
      toast("Missing input value");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(quickContactUrl, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ ...formValues }),
      });
      const result = await response.json();
      console.log(result);
      toast(result.response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast("Operation failed, try again");
    }
  };

  return {
    showFeedBack,
    setShowFeedBack,
    handlRatingChange,
    initialRating,
    loading,
    handleFormChange,
    handleFormSubmit,
    formValues,
    formFields,
  };
};
