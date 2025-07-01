import Colors from "@/app/_components/_data/Colors";
import HeadingDescription from "./HeadingDescription";
import { useState } from "react";

const LogoColorPalette = ({ onHandleInputChange, formData }) => {
  const [selectedPalette, setSelectedPalette] = useState(formData?.palette);

  const colorPalletTitle = "Select your color palette";
  const description =
    "Your color choice speaks for your brand. Pick the shades that leave a lasting impression.";

  return (
    <div>
      <HeadingDescription title={colorPalletTitle} description={description} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-8">
        {Colors.map((palette, index) => (
          <div
            key={index}
            className={`flex p-1 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              selectedPalette === palette.name
                ? "border-2 border-purple-600 shadow-sm"
                : "border-2"
            }`}
          >
            {palette?.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="h-24 w-full"
                onClick={() => {
                  setSelectedPalette(palette.name);
                  onHandleInputChange(palette.name);
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoColorPalette;
