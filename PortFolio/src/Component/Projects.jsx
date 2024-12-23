// import React from 'react'

// eslint-disable-next-line react/prop-types
const Projects = ({ name, details, img }) => {
  return (
    <>
      <div className="border-black border-2 w-1/3  m-2 flex flex-col items-center rounded-lg bg-slate-500 text-white text-center hover:bg-white hover:text-black md:w-1/4 hover:duration-150 cursor-pointer hover:scale-110">
        <img src={img} alt={name} className="w-full h-[300px] overflow-hidden" />
        <div className="">
          <h2 className="text-xl text-cyan-300 uppercase hover:underline">
            {name}
          </h2>
          <p className="text-justify p-4 line-clamp-3">{details}</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
