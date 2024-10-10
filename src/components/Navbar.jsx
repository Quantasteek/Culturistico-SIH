import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/culturistico.png";
import { navItems } from "../constants";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="flex space-between py-5 px-7 h-20 m-6 bg-gray-400 items-center rounded-lg z-50 backdrop-filter backdrop-blur-lg border border-neutral-700 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between sp items-center">
          <div className="flex items-center space-around flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-extrabold ">Culturistico</span>
            <ul className="hidden space-between lg:flex lg:items-center lg:ml-28 w-full space-x-12">
              {navItems.map((item, index) => (
                <li className="font-bold text-base items-center hover:bg-black hover:text-white
                transition-all h-fit hover:rounded-md hover:p-2" key={index}>
                  <a className="items-center" href={item.href}>{item.label}</a>
                </li>
              ))}
              <div className=" hidden lg:flex justify-between space-x-12 mx-60 items-center">
                <a href="#" className="py-2 px-3 border border-black rounded-md bg-gradient-to-r from-orange-500 to bg-orange-800 text-white font-semibold ">
                  Sign In
                </a>
                <a
                  href="#"
                  className="text-white bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md border border-black font-semibold"
                >
                  Create an account
                </a>
              </div> 
            </ul>
            
          </div>
          <div className="lg:higgen md:flex flex-col justify-end lg:relative lg:top-0">
            <button onClick={toggleNavbar} className="lg:hidden">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-800 w-full p-12 flex-col  justify-center items-center mt-60 lg:hidden">
              <button onClick={toggleNavbar} className="">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-5">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <a href="#" className="py-2 px-3 border rounded-md max-sm:pt-3">
                  Sign In
                </a>
                <a
                  href=""
                  className="py-2 px-3 bg-gradient-to-r from-orange-500 to bg-orange-800 max-md:text-[12px] max-md:w-37 max-sm:w-20 max-sm:h-12 max-sm:text-[10px] max-sm:pt-[4px]"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
