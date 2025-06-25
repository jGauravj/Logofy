import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col mt-32 gap-5 items-center relative">
      <h1 className="text-2xl text-zinc-800 max-w-4xl md:text-[52px] font-bold leading-snug text-center z-20">
        Create stunning,{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {" "}
          AI-generated{" "}
        </span>
        logos for your brand in seconds.
      </h1>
      <p className="text-base text-center leading-loose text-gray-600 max-w-4xl font-noraml">
        Forget the struggle of designing logos. Enter your brand name, hit
        generate, and watch AI create the perfect logo for you —{" "}
        <span className="bg-gradient-to-r font-semibold from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
          it's fast, easy, and free to try!
        </span>
      </p>

      <div className="w-full max-w-2xl flex items-center justify-center mt-10 gap-6">
        <div className="w-full  animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-pink-600 via-blue-600 to-purple-600  p-px">
          <input
            type="text"
            placeholder="Enter your logo name"
            className="w-full max-w-lg bg-white px-3 py-1.5 rounded-lg border-transparent outline-none"
          />
        </div>
        <Button className="w-full max-w-[200px]">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
