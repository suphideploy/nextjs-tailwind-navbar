import React from 'react'
import Link from "next/link"
import Image from "next/image"
import thailandlogo from '../public/thailand.png'
import englishlogo from '../public/united-kingdom.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const topbar = () => {
    return (
        <div className="topbar bg-slate-200 mx-auto p-6 pt-1 h-1 shadow-2xl">
            <div className="flex items-center justify-between">
                <div className=''>
                    <span><FontAwesomeIcon  icon={ faPhone }  /> 0979535398</span>
                    <span className='pl-3'><FontAwesomeIcon  icon={ faEnvelope }  /> Chingchimplee@gmail.com</span>
                </div>
                <div className='flex'>
                    <span> <Image src={thailandlogo} width="30" height="30" alt='test' /></span>
                    <span> <Image src={englishlogo} width="30" height="30" alt='test' /></span>  
                </div>
           
            </div>
            
            
        </div>

    )
}


export default topbar