"use client";
import React, { useContext } from "react";
import { FormContext } from "../context/Context";

export default function Buttons() {
  const {
    uploadedImage,
    caughtUploadImage,
    imageWaitGenerate,
    removeBackgroundImage,
    downloadImage,
  } = useContext(FormContext);

  return (
    <div className="mt-20 flex flex-col items-center gap-5">
      <label
        className="relative flex items-center justify-center w-[30%] btn btn-outline btn-secondary"
        htmlFor="uploadInput"
      >
        Upload
      </label>
      <input
        onChange={caughtUploadImage}
        id="uploadInput"
        type="file"
        className="absolute"
        hidden
      />

      {uploadedImage && (
        <button
          onClick={removeBackgroundImage}
          className="w-[30%] btn btn-outline btn-primary"
        >
          Remove Background
        </button>
      )}

      {imageWaitGenerate && (
        <button
          onClick={downloadImage}
          className="w-[30%] btn btn-outline btn-primary"
        >
          Download Image
        </button>
      )}
    </div>
  );
}
