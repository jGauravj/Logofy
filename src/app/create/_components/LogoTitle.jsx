import HeadingDescription from "./HeadingDescription";

const LogoTitle = () => {
  const title = "Logo Title";
  const description =
    "Add your Business, App or Website name for a Custom Logo";

  return (
    <div className="">
      <HeadingDescription title={title} description={description} />
      <input
        type="text"
        placeholder="Enter your logo name"
        className="w-full px-4 py-2 rounded-lg outline-none bg-white my-8 "
        style={{
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};

export default LogoTitle;
