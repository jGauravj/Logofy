import axios from "axios";
import HeadingDescription from "./HeadingDescription";
import Prompt from "@/app/_components/_data/Prompt";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const LogoIdea = ({ formData, onHandleInputChange }) => {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea);

  useEffect(() => {
    genrateLodoDesignIdea();
  }, []);

  const genrateLodoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      "{logoType}",
      formData?.design.title
    )
      .replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoPrompt}", formData.design.prompt);

    // console.log(PROMPT);

    const result = await axios.post("/api/ai-design-ideas", {
      prompt: PROMPT,
    });

    console.log(result.data);
    setIdeas(result.data.ideas);
    setLoading(false);
  };

  const logoIdeaTitle = "Select your design idea";
  const description =
    "Choose a style that aligns with your vision — or skip to get a random suggestion.";

  return (
    <div>
      <HeadingDescription title={logoIdeaTitle} description={description} />
      <div className="flex justify-center items-center">
        {loading && <Loader2 className=" animate-spin my-3" />}
      </div>

      <div className="flex flex-wrap gap-3 my-8">
        {ideas &&
          ideas.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedOption(item);
                onHandleInputChange(item);
              }}
              className={`${
                selectedOption === item &&
                "animate-rotate-border rounded-full shadow bg-conic/[from_var(--border-angle)] from-pink-600 via-blue-600 to-purple-600 p-px"
              } border p-px rounded-full shadow `}
            >
              <h2 className="bg-muted rounded-full py-1 px-3 text-sm cursor-pointer">
                {item}
              </h2>
            </div>
          ))}
        <div
          onClick={() => {
            setSelectedOption("Let AI select the best idea");
            onHandleInputChange("Let AI select the best idea");
          }}
          className={`rounded-full  ${
            selectedOption === "Let AI select the best idea"
              ? "shadow-[0_0_15px_1.5px_rgba(236,72,153,0.7)]"
              : ""
          }`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full py-1 px-3 text-sm cursor-pointer">
            Let AI select the best idea
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LogoIdea;
