import Image from "next/image";
import Buttons from "./components/Buttons";
import PopUp from "./components/PopUp";
import UploadedImage from "./components/UploadedImage";
import CovertedImage from "./components/CovertedImage";

export default function Home() {
  return (
    <div className="relative ">
      <div>
        <h1 className="text-center text-[40px] font-bold mt-5 text-blue-500">
          BackdropBlaster
        </h1>
      </div>
      <Buttons />
      <PopUp />
      <div className="flex gap-10 flex-col items-center p-5">
        <UploadedImage />
        <CovertedImage />
      </div>
    </div>
  );
}
