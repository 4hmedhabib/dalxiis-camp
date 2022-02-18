import classes from "./Form.module.css";
import { AddImage } from "./Svg";
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";

type Props = {
  formik: any;
};

interface Event {
  loaded?: string;
  total?: string;
}

const DropZone = ({ formik }: Props) => {
  const [images, setImages] = useState<any[]>([]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg,image/png",
    onDrop: async (acceptedFiles) => {
      formik.setFieldValue("", acceptedFiles);
      setImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    images.forEach((image) => {
      return URL.revokeObjectURL(image.preview);
    });
  }, [images]);

  return (
    <div className="md:col-span-2 xl:col-span-3">
      <label className={classes.input_label}>Camp Images</label>
      <div className={classes.upload_group}>
        {images.length < 1 ? (
          <div className="space-y-2 text-center">
            <label htmlFor="file_uploads" className="cursor-pointer">
              <AddImage />
            </label>
            <div className="flex flex-col sm:flex-row justify-center text-sm text-gray-600">
              <label htmlFor="file_uploads" className={classes.upload_label}>
                <span>Upload a file</span>
                <input
                  id="file_uploads"
                  name="file_uploads"
                  type="file"
                  value={formik.file_uploads}
                  onChange={formik.handleChange}
                  className="sr-only"
                  {...getInputProps()}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        ) : (
          <div className="flex justify-center ">
            <label
              htmlFor="file_uploads"
              className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer"
            >
              Change the images
            </label>
            <input
              id="file_uploads"
              name="file_uploads"
              type="file"
              value={formik.file_uploads}
              className="sr-only"
              onChange={() => {
                formik.setFieldValue(images);
              }}
              {...getInputProps()}
            />
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {images.map((file) => (
            <div key={file.name}>
              <div className="w-36 h-20 bg-blue-500">
                <img
                  src={file.preview}
                  alt=""
                  className=" w-full h-full object-center object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropZone;
