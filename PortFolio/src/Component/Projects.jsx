// import React from 'react'

// eslint-disable-next-line react/prop-types
const Projects = ({ name, details }) => {
  return (
    <>
      <div className="border-black border-2 w-1/3  m-5 flex flex-col items-center rounded-lg bg-slate-500 text-white text-center hover:bg-white hover:text-black md:w-1/4 hover:duration-500 cursor-pointer">
        <img
          src={`https://via.placeholder.com/300x200`}
          alt={name}
          className="m-4 rounded-l-full "
        />
        <div className="">
          <h2 className="text-xl text-cyan-300 uppercase hover:underline">{name}</h2>
          <p className="text-justify p-4 line-clamp-3">
            {details}
          </p>
          <a href="#" className="bg-cyan-400 p-3 rounded-md text-white hover:bg-cyan-500">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
