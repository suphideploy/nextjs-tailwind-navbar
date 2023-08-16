import React from 'react'
import Link from "next/link"
import Image from "next/image"
import thailandlogo from '../public/thailand.png'
import englishlogo from '../public/united-kingdom.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const topbar = () => {
    return (
      
        <nav className="bg-white px-7 border-gray-200 dark:bg-gray-900 hidden lg:block">
            <div className="flex relative items-center justify-between">
                <div className="text-gray-50">
                    <span><FontAwesomeIcon  icon={ faPhone }  /> 0979535398</span>
                    <span className='pl-3'><FontAwesomeIcon  icon={ faEnvelope }  /> Chingchimplee@gmail.com</span>
                </div>
                <div className="md:flex">
                    <span className='pr-2'> <Image src={thailandlogo} width="30" height="30" alt='test' /></span>
                    <span> <Image src={englishlogo} width="30" height="30" alt='test' /></span>  
                </div>
           
            </div>
            
            
        </nav>

    )
}


export default topbar