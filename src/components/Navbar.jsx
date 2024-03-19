import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" z-10 text-gray-500 flex justify-between items-center max-w-[1240px] h-24 px-4 mx-auto text-lg">
      <div className="flex justify-center items-center">
        <FaLessThan size={30} />
        <h1 className="text-3xl font-bold primary-color mx-2">Abdi</h1>
        <RxSlash size={30} />
        <h1 className="text-3xl font-bold primary-color mx-2">T.</h1>
        <FaGreaterThan size={30} />
      </div>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#home">Home</a>
        </li>
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#skills">Skills</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#experience">Experience</a>
        </li>
        <li className="p-5">
          <a
            className="bg-primary-color text-slate-200 rounded-md max-h-16 p-2"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden text-gray-300 fixed right-10 top-10 z-20"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "z-10 text-gray-300 fixed left-0 top-0 w-full bg-[#202121] easy-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        {/* <h1 className="text-3xl font-bold primary-color m-3">Abdi T.</h1> */}
        <div className="flex justify-center items-center">
          <FaLessThan size={30} />
          <h1 className="text-3xl font-bold primary-color mx-2">Abdi</h1>
          <RxSlash size={30} />
          <h1 className="text-3xl font-bold primary-color mx-2">T.</h1>
          <FaGreaterThan size={30} />
        </div>
        <ul className="p-3 text-2xl ml-20 z-10">
          <li className="p-2">
            <a href="#home">Home</a>
          </li>
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="p-2">
            <a
              className="bg-primary-color text-slate-200 rounded-md max-h-16 p-2"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
