"use client";
import React, { useState } from "react";
import daisyui from "daisyui";

export default function Buttons() {
  const [isFileDone, setIsFileDone] = useState<boolean>(false);
  return (
    <div className="mt-20 flex flex-col items-center gap-5">
      <button className="w-[30%] btn btn-outline btn-secondary">Upload</button>
      {isFileDone && (
        <button className="w-[30%] btn btn-outline btn-primary">
          Download
        </button>
      )}
    </div>
  );
}
