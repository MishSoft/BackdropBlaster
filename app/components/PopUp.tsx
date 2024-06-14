/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

export default function PopUp() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };

  return (
    <div className="absolute right-[5%] top-[3%]">
      <button className="btn" onClick={openModal}>
        <FaCircleInfo />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Information!</h3>
          <div className="py-4">
            <p>Welcome to our app! To use this app, follow these steps:</p>
            <ol className="list-decimal pl-5">
              <li className="pt-2">
                <span className="text-red-300">Step 1:</span> Upload an image by
                clicking the "Upload" button.
              </li>
              <li className="pt-2">
                <span className="text-red-300">Step 2:</span> Click the "Remove
                Background" button to remove the background from the uploaded
                image.
              </li>
              <li className="pt-2">
                <span className="text-red-300">Step 3:</span> Preview the
                processed image and click the "Download" button to save it.
              </li>
            </ol>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
