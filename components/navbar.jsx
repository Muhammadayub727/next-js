"use client";

import React from 'react'
import Image from 'next/image'
import Logo from '../public/next.svg'
import Link from 'next/link'
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    return (
        <nav className='fixed w-full h-24 shadow-xl bg-white'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <Link href='/'>
                    <Image 
                        src={Logo} 
                        alt="logo"
                        width={100}
                        height={100} 
                        className='cursor-pointer'
                        priority
                    />
                </Link>
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <Link href='/about'>
                            <li className='ml-10 text-xl uppercase transition-all duration-500 hover:border-b hover:border-black hover:transition hover:duration-500'>Why us</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='ml-10 text-xl uppercase transition-all duration-500 hover:border-b hover:border-black hover:transition hover:duration-500'>Contact</li>
                        </Link>
                        <Link href='/services'>
                            <li className='ml-10 text-xl uppercase transition-all duration-500 hover:border-b hover:border-black hover:transition hover:duration-500'>Services</li>
                        </Link>
                        <Link href='/blog'>
                            <li className='ml-10 text-xl uppercase transition-all duration-500 hover:border-b hover:border-black hover:transition hover:duration-500'>Blog</li>
                        </Link>
                    </ul>
                </div>
                <div className='md:hidden cursor-pointer pl-24' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
                <div className={
                    menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='cursor-pointer'>
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
