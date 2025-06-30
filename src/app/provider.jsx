import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <div className="z-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <Header />
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 selection:bg-purple-600 selection:text-white ">
        {children}
      </div>
    </div>
  );
};

export default Provider;
