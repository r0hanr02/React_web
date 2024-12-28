import "react";

// eslint-disable-next-line react/prop-types
const Plans = ({ name, plan, details, p }) => {
  return (
    <div className="w-1/4 m-5 border-2 border-cyan-400 rounded-lg ">
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h1 className="text-2xl text-center m-2">{name}</h1>
        <h3 className="text-2xl text-cyan-400 md:text-5xl">{plan}</h3>
        <h3 className="text-3xl">{details}</h3>
        <p>{p}</p>
        <button className="border-2 border-cyan-500 p-3 m-3 rounded-2xl hover:scale-125 duration-150 hover:bg-white hover:text-cyan-500">
          <a href="#form">Join Now</a>
        </button>
      </div>
    </div>
  );
};

export default Plans;
