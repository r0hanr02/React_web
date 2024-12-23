// import React from 'react'

// eslint-disable-next-line react/prop-types
const About = ({name,details,img}) => {
  return (
    <div className="bg-slate-900 text-white w-1/3 flex justify-center">
          <div className="bg-white w-1/2 m-5">
          <img
            src={img}
            alt={name}
            className="m-"
          />
          <h1 className="text-2xl text-black text-center font-extrabold">{name}</h1>
          <p className="text-xl text-center text-black line-clamp-4"> {details}</p>
          </div>
    </div>
  )
}

export default About
