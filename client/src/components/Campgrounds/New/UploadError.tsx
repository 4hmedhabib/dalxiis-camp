import { XIcon } from "@heroicons/react/solid";
import { CircularProgress } from "@mui/material";
import React, { Fragment } from "react";
import { FileError } from "react-dropzone";

export interface Props {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}

const UploadError = ({ file, onDelete, errors }: Props) => {
  let progress = 100;

  return (
    <Fragment>
      <div
        className={`flex items-center justify-between bg-slate-50 shadow mx-2 rounded-md px-2 py-2  border border-red-600 text-red-500 `}
      >
        <div className="flex items-center">
          <div
            className={`flex mr-5 justify-center items-center rounded-full w-12 h-12  flex-col relative bg-white shadow-xl shadow-gray-200 
       `}
          >
            <CircularProgress
              size={50}
              variant="determinate"
              color="error"
              value={progress === 0 ? 100 : progress}
            />
            <span className="absolute text-xs text-red-500">0%</span>
          </div>
          <span className=" truncate ... w-56">{file.name}</span>
        </div>
        <XIcon
          className="w-5 h-5 text-red-500 mr-8 cursor-pointer"
          onClick={() => onDelete(file)}
        />
      </div>
      <ul className=" list-disc px-8 py-2 text-red-500">
        {errors.map((error) => {
          return <li className=" list-item text-sm">{error.message}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default UploadError;
