"use client";
import React, { useState, useContext } from "react";
import { FormContext } from "../context/Context";
import { read } from "fs";

export default function Buttons() {
  const [isFileDone, setIsFileDone] = useState<boolean>(false);
  const { setUploadedImage } = useContext(FormContext);
  const { uploadedImage } = useContext(FormContext);
  const caughtUploadImage = (event: any) => {
    let imagePath = event.target.files[0];

    if (imagePath) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(imagePath);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-5">
      <label
        className="relative flex items-center justify-center w-[30%] btn btn-outline btn-secondary"
        htmlFor="ufloadINp"
      >
        Upload
      </label>
      <input
        onChange={caughtUploadImage}
        id="ufloadINp"
        type="file"
        className="absolute"
        hidden
      />
      {isFileDone && (
        <button className="w-[30%] btn btn-outline btn-primary">
          Download
        </button>
      )}

      {uploadedImage && (
        <button className="w-[30%] btn btn-outline btn-primary">
          Remove Background
        </button>
      )}
    </div>
  );
}
