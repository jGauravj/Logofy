"use client";

import LogoDesign from "@/app/_components/_data/LogoDesign";
import HeadingDescription from "./HeadingDescription";
import Image from "next/image";
import { useState } from "react";

const LogoDesigns = ({ onHandleInputChange, formData }) => {
  const [selectedStyle, setSelectedStyle] = useState(formData?.design?.title);

  const logoDesignTitle = "Choose your logo style";
  const description =
    "Select a design style that best represents your brand's unique identity.";

  return (
    <div>
      <HeadingDescription title={logoDesignTitle} description={description} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-8">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedStyle(design.title);
              onHandleInputChange(design);
            }}
            className={`${
              selectedStyle === design.title
                ? "cursor-pointer border-2 rounded-lg border-purple-600 transition-all duration-300"
                : "border-2 border-transparent cursor-pointer rounded-lg hover:border-purple-600 transition-all duration-300"
            }`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-lg h-[150px] object-cover shadow-sm shadow-gray-300 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesigns;
