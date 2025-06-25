const HeadingDescription = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p className="text-base text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default HeadingDescription;
