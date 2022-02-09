import React from "react";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

type Props = {};

const Input = styled("input")({
  display: "none",
});

const NewCampground = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      images: [],
    },
    onSubmit: (values) => {
      console.log("Your Values", values);
    },
  });

  return (
    <section id="new-campground">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          name="title"
          label="Title"
          onChange={formik.handleChange}
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              name="images"
              onChange={formik.handleChange}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
          {/* <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label> */}
        </Stack>
        <button type="submit">submmit</button>
      </form>
    </section>
  );
};

export default NewCampground;
