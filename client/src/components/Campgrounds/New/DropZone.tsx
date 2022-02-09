import classes from "./Form.module.css";
import { AddImage } from "./Svg";
import { useDropzone } from "react-dropzone";

type Props = {
  formik: any;
};

interface File {
  path?: string;
  size?: number;
}

const DropZone = ({ formik }: Props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: File) => (
    <li
      key={file.path}
      className="max-w-sm shadow bg-blue-50 rounded-md px-2 py-1 text-sm"
    >
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="md:col-span-2 xl:col-span-3">
      <label className={classes.input_label}>Camp Images</label>
      <div className={classes.upload_group}>
        <div className="space-y-2 text-center">
          <AddImage />
          <div className="flex flex-col sm:flex-row justify-center text-sm text-gray-600">
            <label htmlFor="file_upload" className={classes.upload_label}>
              <span>Upload a file</span>
              <input
                id="file_upload"
                name="file_uploads"
                type="file"
                onChange={formik.handleChange}
                className="sr-only"
                {...getInputProps()}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>

        <ul className="flex items-center justify-center gap-3 flex-wrap">
          {files}
        </ul>
      </div>
    </div>
  );
};

export default DropZone;
