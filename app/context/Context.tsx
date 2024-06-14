"use client";
import React, { ChangeEvent, useState } from "react";

interface FormContextProps {
  uploadedImage: string | null;
  setUploadedImage: (image: string) => void;
  generatedImage: string | null;
  setGeneratedImage: (image: string) => void;
  caughtUploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
  setImageWaitGenerate: (wait: boolean) => void;
  imageWaitGenerate: boolean;
  removeBackgroundImage: () => void;
  downloadImage: () => void;
}

const FormContext = React.createContext<FormContextProps>({
  uploadedImage: null,
  setUploadedImage: () => {},
  generatedImage: null,
  setGeneratedImage: () => {},
  caughtUploadImage: () => {},
  setImageWaitGenerate: () => {},
  imageWaitGenerate: false,
  removeBackgroundImage: () => {},
  downloadImage: () => {},
});

const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const api = process.env.NEXT_PUBLIC_API_KEY;
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageWaitGenerate, setImageWaitGenerate] = useState<boolean>(false);

  const removeBackgroundImage = async () => {
    if (!uploadedImage) return;

    setImageWaitGenerate(true);

    try {
      // Convert base64 to blob for formData
      const base64Response = await fetch(uploadedImage);
      const blob = await base64Response.blob();

      const formData = new FormData();
      formData.append("image_file", blob);
      formData.append("size", "auto");

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": api!,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to remove background: ${errorDetails}`);
      }

      const resultBlob = await response.blob();
      const url = URL.createObjectURL(resultBlob);
      setGeneratedImage(url);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setImageWaitGenerate(false);
    }
  };

  const caughtUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const imagePath = event.target.files?.[0];

    if (imagePath) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(imagePath);
    }
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "image-without-background.png";
      link.click();
    }
  };

  return (
    <FormContext.Provider
      value={{
        setUploadedImage,
        uploadedImage,
        setGeneratedImage,
        generatedImage,
        caughtUploadImage,
        setImageWaitGenerate,
        imageWaitGenerate,
        removeBackgroundImage,
        downloadImage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
