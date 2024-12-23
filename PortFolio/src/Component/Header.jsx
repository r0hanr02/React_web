// import React from 'react'
const Header = () => {
  return (
    <>
    <nav className="w-full h-16 flex items-center justify-between bg-white sticky top-0 z-40 ">
        <h1 className="text-4xl text-black ml-10 font-bold hover:underline">GetIT.</h1>
        <div className="gap-2 items-center hidden md:flex">
            <a href="/"  className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Agents</a>
            <a href="#about" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">About Team</a>
            <a href="#projects" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Projects</a>
            <a href="#contact" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Contact Form</a>
        </div>
    </nav>
    </>
  )
}

export default Header
