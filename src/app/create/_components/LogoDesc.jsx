import HeadingDescription from "./HeadingDescription";

const LogoDesc = ({ onHandleInputChange, formData }) => {
  const logoDescTitle = "Describe your logo idea";
  const description =
    "Share your thoughts, themes, or inspirations to help us create a logo that truly reflects your brand.";

  return (
    <div>
      <HeadingDescription title={logoDescTitle} description={description} />
      <input
        type="text"
        placeholder="Describe your logo idea"
        className="w-full px-4 py-2 rounded-lg focus:ring-1 ring-purple-500/50 border transition-all duration-300 outline-none bg-white my-8 "
        // defaultValue={formData?.desc}
        value={formData?.desc}
        onChange={(e) => {
          // setTitle(e.target.value);
          onHandleInputChange(e.target.value);
        }}
      />
    </div>
  );
};

export default LogoDesc;
