import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from '../public/marketing.png'




const nav = () => {
    return (
       
        <nav className="relative bg-slate-100 mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className='pt-0'>
                    <Link href="/">
                        <div className='flex hover:text-slate-500'>
                                <Image src={Logo} width="30" height="30" alt='test' />
                                <h1 className='text-2xl font-bold'>Data Driven Masrketing</h1>
                        </div>
                    </Link>

                </div>
                <div className="md:flex space-x-6 drop-shadow-xl">
                    <Link href="/" className="text-xl hover:text-slate-500">Home</Link>
                    <Link href="#about" className="text-xl hover:text-slate-500">About</Link>
                    <Link href="#service" className="text-xl hover:text-slate-500">Services</Link>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 rounded-full">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default nav