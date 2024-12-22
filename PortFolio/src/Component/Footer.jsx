const Footer = () => {
  return (
    <div className=" bg-white ">
      <div className="flex justify-center flex-col items-center md:justify-between md:flex-row">
        <div className="flex justify-center items-center p-4">
          <a href="/" className="text-md mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            Home
          </a>
          <span className="mx-4 text-sm">|</span>
          <a href="/about" className="text-md mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            About
          </a>
          <span className="mx-4 text-sm">|</span>
          <a href="/contact" className="text-md mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            Contact
          </a>
          <span className="mx-4 text-sm">|</span>
          <a href="/projects" className="text-md mx-4 md:mx-14 xl:mx-16 underline hover:text-blue-600">
            Projects
          </a>
        </div>
        <div className="flex justify-center items-center p-4">
          <a href="#" className="text-sm mx-4 hover:underline">
            Twitter
          </a>
          <a href="#" className="text-sm mx-4 hover:underline">
            Github
          </a>
          <a href="#" className="text-sm mx-4 hover:underline">
            Instagram
          </a>
          <a href="#" className="text-sm mx-4 hover:underline">
            Linkedin
          </a>
          <a href="#" className="text-sm mx-4 hover:underline">
            Youtube
          </a>
          

        </div>
      </div>
      <hr  className="m-2 border-black"/>
      <div className="flex items-center justify-around">
        <span className="text-sm text-gray-600 underline p-2 cursor-pointer
        ">
          Condition
        </span>
        <span className="text-sm text-gray-600 underline p-2 cursor-pointer
        ">
          Accessibility Statement
        </span>
        <span className="text-sm text-gray-600 underline p-2 cursor-pointer
        ">
          Siteman
        </span>
        <span className="text-sm text-gray-600 underline p-2 cursor-pointer
        ">
          Cookie Policy
        </span>
        <span className="text-sm text-gray-600 underline p-2 cursor-pointer
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
