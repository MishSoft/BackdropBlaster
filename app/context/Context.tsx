"use client";
import React, {
  ChangeEvent,
  Dispatch,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

interface FormContextProps {
  uploadedImage: null | string;
  setUploadedImage: (image: string) => void;
}

const FormContext = React.createContext<FormContextProps>({
  uploadedImage: null,
  setUploadedImage: () => {},
});

const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  return (
    <FormContext.Provider value={{ setUploadedImage, uploadedImage }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
