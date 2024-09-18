import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from "../assets/culturistico.png"
import { navItems } from '../constants'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false);

    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/70 '>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between sp items-center">
                <div className='flex items-center flex-shrink-0'>
                    <img className= "h-10 w-10 mr-2"src={logo} alt = " "/>
                    <span className='text-xl tracking-tight'>Culturistico</span>
                    <ul className='hidden lg:flex ml-28 space-x-12'>
                    {navItems.map((item, index) => (
                       <li key ={index}>
                        <a href={item.href}>
                            {item.label}</a>
                       </li> 
                    ))}
                    </ul>
                    <div className='hidden lg:flex justify-between space-x-12 mx-60 items-center'>
                        <a href="#" className='py-2 px-3 border rounded-md '>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                    </div>
                    <div className='lg:higgen md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar} className='lg:hidden'>
                            {mobileDrawerOpen ? <X/> : <Menu/>} 
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-800 w-full p-12 flex-col  justify-center items-center mt-60 lg:hidden'>
                                                                <button onClick={toggleNavbar}className=''>
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                        <ul>
                            {navItems.map((item, index)=>(
                            <li key ={index} className='py-5'>
                        <a href={item.href}>
                            {item.label}</a>
                       </li> 
                            ))}
                        </ul>
                        <div className="flex justify-between">
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href="" className='py-2 px-5 bg-gradient-to-r from-orange-500 to bg-orange-800'>Create an account</a>

                        </div>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
