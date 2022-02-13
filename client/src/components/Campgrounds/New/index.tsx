import React from "react";
import { useFormik } from "formik";
import Form from "./Form";
import { useMutation } from "@apollo/client";
import { CREATE_CAMPGROUND } from "../../../graphql/Mutations/campground";

type Props = {};

const NewCampground = (props: Props) => {
  const [createCamp, { data, error, loading }] = useMutation(CREATE_CAMPGROUND);

  const formik = useFormik({
    initialValues: {
      title: "",
      file_uploads: [],
    },
    onSubmit: (values) => {
      createCamp({
        variables: {
          campgroundInput: {
            geometry: {
              lng: 1.05,
              lat: 1.08,
            },
            title: "Laas geel",
            location: "Laascaanood, Somaliland",
            authorId: 1,
            description: "Leading us neatly on from our last",
            price: 25,
            images: [...values.file_uploads],
          },
        },
      });
    },
  });

  return (
    <section id="new-campground">
      <Form formik={formik} />
    </section>
  );
};

export default NewCampground;
