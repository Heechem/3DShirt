import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Uplaod file
        </label>
        <p className="mt-2 truncate text-xs text-gray-500">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
