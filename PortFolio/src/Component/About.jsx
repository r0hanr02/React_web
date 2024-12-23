// import React from 'react'

// eslint-disable-next-line react/prop-types
const About = ({ name, img }) => {
  return (
    <div className=" text-white w-1/2 flex justify-center rounded-3xl my-1  md:w-1/3 hover:scale-105 duration-150">
      <div className=" w-full m-5 hover:bg-white rounded-3xl">
        <img src={img} alt={name} className=" h-[300px] rounded-3xl" />
        <h1 className="text-2xl text-cyan-500  text-center font-extrabold ">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default About;
