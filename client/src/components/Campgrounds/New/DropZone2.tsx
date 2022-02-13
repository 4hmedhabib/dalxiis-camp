import React, { useState, useCallback } from "react";
import SingleUploadFile from "./SingleUploadFile";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import UploadError from "./UploadError";

export interface UploadableFile {
  file: File;
  errors: FileError[];
}

const DropZone2 = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const uploadFile = (file: File, url: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((prevFile) => {
        if (prevFile.file === file) {
          return { ...prevFile, url };
        }

        return prevFile;
      })
    );
  };

  const deletFile = (file: File) => {
    setFiles((prevState) => prevState.filter((fw) => fw.file !== file));
  };

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    console.log(accFiles);
    console.table(accFiles);
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div>
      <input {...getInputProps()} />
      <p {...getRootProps()}>
        Drag 'n' drop some files here, or click to select files
      </p>

      {files.map((fileWrapper, i) =>
        fileWrapper.errors.length ? (
          <UploadError
            errors={fileWrapper.errors}
            file={fileWrapper.file}
            onDelete={deletFile}
          />
        ) : (
          <SingleUploadFile
            onDelete={deletFile}
            onUpload={uploadFile}
            file={fileWrapper.file}
            key={i}
          />
        )
      )}
    </div>
  );
};

export default DropZone2;
