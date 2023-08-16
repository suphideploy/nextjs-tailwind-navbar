import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/marketing.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
       
        <nav className="relative bg-slate-100 mx-auto p-5">
            <div className="flex items-center justify-between">
                <div className='pt-0'>
                    <Link href="/">
                        <div className='flex text-black hover:text-slate-500'>
                                <Image src={Logo} width="30" height="30" alt='test' />
                                <h1 className='text-2xl font-bold'>Data Driven Masrketing</h1>
                        </div>
                    </Link>

                </div>
                <div className="hidden sm:flex space-x-6 drop-shadow-xl  text-black">
                    <Link href="/" className="text-xl hover:text-slate-500">Home</Link>
                    <Link href="#about" className="text-xl hover:text-slate-500">About</Link>
                    <Link href="#service" className="text-xl hover:text-slate-500">Services</Link>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 rounded-full">
                        Contact
                    </button>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                <AiOutlineMenu size={25} />
                </div>
            </div>
           <div className={
            menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0F3] p-10 ease-in duration-500"
           : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
           }>
            <div className='flex w-full items-center justify-end'>
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                <AiOutlineClose size={25} />
                </div>
            </div>
            <div className="flex-col py-4">
                <ul>
                <Link href="/">
                    <li onClick={() => setMenuOpen(false)}
                    className='py-4 cursor-pointer'
                    >
                    Home
                    </li>
                </Link>
                <Link href="/">
                    <li onClick={() => setMenuOpen(false)}
                    className='py-4 cursor-pointer'
                    >
                    About
                    </li>
                </Link>
                <Link href="/">
                    <li onClick={() => setMenuOpen(false)}
                    className='py-4 cursor-pointer'
                    >
                    Service
                    </li>
                </Link>
                <Link href="/">
                    <li onClick={() => setMenuOpen(false)}
                    className='py-4 cursor-pointer'
                    >
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3  rounded-full">
                        Contact
                    </button> 
                    </li>
                </Link>
                    
                </ul>
                   
            </div>
           </div>
        </nav>
    )
   
   
}

export default nav