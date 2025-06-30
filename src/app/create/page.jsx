"use client";

import { Button } from "@/components/ui/button";
import LogoTitle from "./_components/LogoTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import LogoDesc from "./_components/LogoDesc";
import LogoColorPalette from "./_components/LogoColorPalette";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";

const CreateLogo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    console.log(formData);
  };

  useEffect(() => {
    console.log(`Step ${step} FormData:`, formData);
  }, [formData, step]);

  const handleNext = () => {
    if (step === 1 && !formData?.title) {
      alert("Please enter your logo");
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="mt-28 px-18 py-10 bg-muted border rounded-2xl shadow ">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
        />
      ) : step == 2 ? (
        <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)} />
      ) : step == 3 ? (
        <LogoColorPalette
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
        />
      ) : step == 4 ? (
        <LogoDesigns
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
        />
      ) : step == 5 ? (
        <LogoIdea
          formData={formData}
          onHandleInputChange={(v) => onHandleInputChange("idea", v)}
        />
      ) : null}
      <div className="flex items-center justify-end gap-4">
        {step != 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            <ArrowLeft /> Previous
          </Button>
        )}

        <Button onClick={handleNext}>
          Continue <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
