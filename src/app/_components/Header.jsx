import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-3 flex justify-between items-center bg-background/5 backdrop-blur-sm border-b ">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="logo" width={30} />
        <h2 className="text-xl font-semibold text-[#4A2574]">Logofy_</h2>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
