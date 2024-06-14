"use client";
import React, { useContext } from "react";
import { FormContext } from "../context/Context";
import Image from "next/image";
export default function UploadedImage() {
  const { uploadedImage } = useContext(FormContext);
  return (
    <div className="w-[300px] mt-5 h-[300px]">
      {uploadedImage && (
        <Image
          className="w-full h-full border object-cover border-blue-500 rounded-lg"
          width={0}
          height={0}
          src={uploadedImage ? uploadedImage : ""}
          alt={""}
        />
      )}
    </div>
  );
}
