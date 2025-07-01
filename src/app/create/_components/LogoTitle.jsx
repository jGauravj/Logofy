"use client";

import { useSearchParams } from "next/navigation";
import HeadingDescription from "./HeadingDescription";
import { useState } from "react";

const LogoTitle = ({ onHandleInputChange }) => {
  const logoTitle = "Logo Title";
  const description =
    "Add your Business, App or Website name for a Custom Logo";

  const searchParams = useSearchParams();

  const [title, setTitle] = useState(searchParams?.get("title") ?? "");

  return (
    <div className="">
      <HeadingDescription title={logoTitle} description={description} />
      <input
        type="text"
        placeholder="Enter your logo name"
        className="w-full px-4 py-2 rounded-lg focus:ring-1 ring-purple-500/50 border transition-all duration-300 outline-none bg-white my-8 "
        defaultValue={title}
        onChange={(e) => {
          setTitle(e.target.value);
          onHandleInputChange(e.target.value);
        }}
      />
    </div>
  );
};

export default LogoTitle;
