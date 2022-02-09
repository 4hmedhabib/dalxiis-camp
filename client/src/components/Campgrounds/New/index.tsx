import React from "react";
import { useFormik } from "formik";
import Form from "./Form";

type Props = {};

const NewCampground = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      file_uploads: [],
    },
    onSubmit: (values) => {
      console.log("Your Values", values);
    },
  });

  return (
    <section id="new-campground">
      <Form formik={formik} />
    </section>
  );
};

export default NewCampground;
