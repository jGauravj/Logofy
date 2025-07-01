import { pricingOption } from "@/app/_components/_data/pricingCardData";
import HeadingDescription from "./HeadingDescription";
import { Dot, DotIcon } from "lucide-react";

const PricingModel = () => {
  const pricingTitle = "Choose Your Plan";
  const description =
    "Start for free, upgrade anytime. Flexible AI solutions for all creators.";

  return (
    <div>
      <HeadingDescription title={pricingTitle} description={description} />

      <div className="flex justify-center my-8 gap-10">
        {pricingOption.map((pricing, index) => (
          <div
            key={index}
            className={`border px-6 py-3 w-sm ${
              pricing.isPremium ? "bg-purple-600 text-white " : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <h2>{pricing.title}</h2>
              <span className="flex items-center px-2 rounded-full bg-[#F78C3E]">
                <DotIcon strokeWidth={4} className=" " />
                <p className="text-xs font-medium text-white">
                  {pricing.label}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingModel;
