import { Button } from "@/components/ui/button";
import LogoTitle from "./_components/LogoTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CreateLogo = () => {
  return (
    <div className="mt-28 px-14 py-8 bg-muted border rounded-2xl shadow ">
      <LogoTitle />
      <div className="flex items-center justify-end gap-4">
        <Button variant="outline">
          <ArrowLeft /> Previous
        </Button>
        <Button>
          Continue <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
