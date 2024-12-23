const Footer = () => {
  return (
    <div className=" bg-slate-700 ">
      <div className="flex justify-center flex-col items-center md:justify-between md:flex-col xl:flex-row">
        <div className="flex justify-center items-center p-4">
          <a href="/" className="text-md text-white mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            Home
          </a>
          <span className="mx-4 text-sm">|</span>
          <a href="#about" className="text-md text-white mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            About
          </a>
          <span className="mx-4 text-sm">|</span>
          <a href="#contact" className="text-md text-white mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            Contact
          </a>
          <span className="mx-4 text-sm">|</span>
          <a href="#projects" className="text-md text-white mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            Projects
          </a>
        </div>
        <div className="flex justify-center items-center p-4">
          <a href="#" className="text-sm text-sky-600 mx-4 hover:underline rounded-md border-2 border-sky-600 p-2 hover:bg-sky-600 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-sm  mx-4 hover:underline rounded-md border-2 border-black p-2 hover:bg-black hover:text-white">
            Github
          </a>
          <a href="#" className="text-sm text-pink-600 mx-4 hover:underline rounded-md border-2 border-pink-600 p-2 hover:bg-pink-600 hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-sm text-blue-600 mx-4 hover:underline rounded-md border-2 border-blue-600 p-2 hover:bg-blue-600 hover:text-white">
            Linkedin
          </a>
          <a href="#" className="text-sm text-red-600 mx-4 hover:underline rounded-md border-2 border-red-600 p-2 hover:bg-red-600 hover:text-white">
            Youtube
          </a>
          

        </div>
      </div>
      <hr  className="m-2 border-black"/>
      <div className="flex items-center justify-around ">
        <span className="text-sm text-white underline p-2 cursor-pointer
        ">
          Condition
        </span>
        <span className="text-sm text-white underline p-2 cursor-pointer
        ">
          Accessibility Statement
        </span>
        <span className="text-sm text-white underline p-2 cursor-pointer
        ">
          Siteman
        </span>
        <span className="text-sm text-white underline p-2 cursor-pointer
        ">
          Cookie Policy
        </span>
        <span className="text-sm text-white underline p-2 cursor-pointer
        ">
          Do Not Sell My Personal Information
        </span>
      </div>
      <p className="text-center text-gray-600 text-sm ">
        Copyright © 2024 My Website. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
