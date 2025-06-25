import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <div className="z-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <Header />
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 selection:bg-purple-600 selection:text-white ">
        {children}
      </div>
    </div>
  );
};

export default Provider;
