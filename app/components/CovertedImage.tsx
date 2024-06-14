"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { FormContext } from "../context/Context";

export default function ConvertedImage() {
  const { generatedImage, imageWaitGenerate } = useContext(FormContext);

  return (
    <div className="w-[300px] mt-5 h-[300px]">
      {imageWaitGenerate && generatedImage && (
        <Image
          className="w-full h-full border object-cover border-blue-500 rounded-lg"
          width={300}
          height={300}
          src={generatedImage}
          alt="Generated Image"
        />
      )}
    </div>
  );
}
