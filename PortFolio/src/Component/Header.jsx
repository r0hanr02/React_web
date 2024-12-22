// import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="w-full h-16 flex items-center justify-between bg-cyan-500 ">
        <h1 className="text-4xl text-white ml-10 font-bold hover:underline">Rohan.</h1>
        <div className="gap-2 items-center hidden md:flex">
            <a href="/"  className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Home</a>
            <a href="/about" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">About</a>
            <a href="/contact" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Contact</a>
            <a href="/projects" className="bg-slate-500 p-3 m-1 rounded-xl text-white ">Projects</a>
        </div>
    </nav>
    </>
  )
}

export default Header
