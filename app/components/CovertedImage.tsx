import React from "react";
import Image from "next/image";
export default function CovertedImage() {
  return (
    <div className="p-5 badge badge-primary">
      <Image className="w-full" width={200} height={200} src={"/"} alt={""} />
    </div>
  );
}
