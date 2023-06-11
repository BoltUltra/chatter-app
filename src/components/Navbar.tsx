import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between md:px-20 p-5 bg-white">
      <h3 className="text-primary uppercase text-3xl font-semibold">Chatter</h3>
      <div className="md:flex hidden items-center space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About Us</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Blogs</Link>
      </div>
      <div className="md:flex items-center space-x-5 hidden">
        <Link
          to={"/login"}
          className="border-2 border-primary px-7 py-2 rounded text-primary"
        >
          Log In
        </Link>
        <Link
          to={"/register"}
          className="border-2 border-primary px-7 py-2 rounded text-white bg-primary"
        >
          Sign Up
        </Link>
      </div>
      <button
        onClick={handleToggle}
        className="text-primary font-extrabold md:hidden block"
      >
        <CiMenuFries size={"2em"} />
        <span className="sr-only">Open main menu</span>
      </button>

      {/*Mobile Nav*/}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="h-screen fixed top-0 left-0 px-5 w-full md:hidden z-10 bg-white text-primary">
          <button
            onClick={handleToggle}
            className={`fixed right-5 text-primary top-5`}
          >
            <AiOutlineClose size={"3.5em"} />
          </button>
          <div className="flex flex-col space-y-10 pt-20 uppercase text-3xl font-bold tracking-widest">
            <Link to={"/"} onClick={handleToggle}>
              Home
            </Link>
            <Link to={"/"} onClick={handleToggle}>
              About Us
            </Link>
            <Link to={"/"} onClick={handleToggle}>
              Contact
            </Link>
            <Link to={"/"} onClick={handleToggle}>
              Blogs
            </Link>
          </div>
          <div className="flex items-center space-x-5 mt-10 uppercase text-2xl font-bold">
            <Link
              to={"/login"}
              className="border-2 border-primary px-7 py-2 rounded text-primary"
            >
              Log In
            </Link>
            <Link
              to={"/register"}
              className="border-2 border-primary px-7 py-2 rounded text-white bg-primary"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
