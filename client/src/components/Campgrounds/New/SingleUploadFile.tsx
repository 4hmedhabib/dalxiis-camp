import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { XIcon } from "@heroicons/react/solid";

export interface SingleUploadFileProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

const SingleUploadFile = ({
  file,
  onDelete,
  onUpload,
}: SingleUploadFileProps) => {
  const [progress, setProgress] = useState(0);

  const uploadFile = (file: File, onProgress: (percentage: number) => void) => {
    const url = "https://api.claoudinary.com/v1_1/sosloper/image/upload";

    return new Promise<string>((res, rej) => {
      const xhr = new XMLHttpRequest();

      xhr.open("POST", url);

      xhr.onload = () => {
        const resp = JSON.parse(xhr.responseText);
        console.log(resp);
        res(resp.secure_url);
      };

      xhr.onerror = (evt) => rej(evt);

      xhr.upload.onprogress = (evt) => {
        if (evt.lengthComputable) {
          const percentage = (evt.loaded / evt.total) * 100;
          onProgress(Math.round(percentage));
        }
      };

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "sosloper_default_preset");

      xhr.send(formData);
    });
  };

  useEffect(() => {
    const upload = async () => {
      const url = await uploadFile(file, setProgress);

      onUpload(file, url);
    };

    upload();
  }, []);

  let colors:
    | "error"
    | "success"
    | "primary"
    | "secondary"
    | "info"
    | "warning"
    | "inherit" =
    progress === 0 ? "error" : progress === 100 ? "success" : "primary";

  return (
    <div
      className={`flex items-center justify-between bg-slate-50 shadow mx-2 rounded-md px-2 py-2 my-4 ${
        progress !== 0 ? "" : " border border-red-600 text-red-500"
      }`}
    >
      <div className="flex items-center">
        <div
          className={`flex mr-5 justify-center items-center rounded-full w-12 h-12  flex-col relative bg-white shadow-xl shadow-gray-200 
           `}
        >
          <CircularProgress
            size={50}
            variant="determinate"
            color={colors}
            value={progress === 0 ? 100 : progress}
          />
          <span className="absolute text-xs">{progress}%</span>
        </div>
        SingleUploadFile
      </div>
      <XIcon
        className="w-5 h-5 text-red-500 mr-8 cursor-pointer"
        onClick={() => onDelete(file)}
      />
    </div>
  );
};

export default SingleUploadFile;
