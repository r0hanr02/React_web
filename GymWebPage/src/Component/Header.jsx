// import React from 'react'
const Header = () => {
  return (
    <>
    <nav className="w-full h-16 flex items-center justify-between bg-white  ">
        <h1 className="text-4xl text-black ml-10 font-bold hover:underline">IronHeart.</h1>
        <div className="gap-2 items-center hidden md:flex">
            <a href="/"  className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Home</a>
            <a href="#about" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Pro Members </a>
            <a href="#plans" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Our Plans </a>
            <a href="#projects" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Our Services</a>
            <a href="#contact" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Contact Form</a>
        </div>
    </nav>
    </>
  )
}

export default Header
