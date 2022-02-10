import React, { useState, useCallback } from "react";
import SingleUploadFile from "./SingleUploadFile";
import { FileError, FileRejection, useDropzone } from "react-dropzone";

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
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <input {...getInputProps()} />
      <p {...getRootProps()}>
        Drag 'n' drop some files here, or click to select files
      </p>
      {files.map((fileWrapper, i) => (
        <SingleUploadFile
          onDelete={deletFile}
          onUpload={uploadFile}
          file={fileWrapper.file}
          key={i}
        />
      ))}
      {JSON.stringify(files)}
    </div>
  );
};

export default DropZone2;
