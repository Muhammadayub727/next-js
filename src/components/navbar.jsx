"use client";

import React from 'react'
import Image from 'next/image'
import Logo from '../../public/next.svg'
import Link from 'next/link'
import { AiOutlineMenu , AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai'
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

                        <div className='flex-col py-4'>
                            <Link href="/">
                                <li
                                    onClick={()=>setMenuOpen(false)}
                                    className='py-4 cursor-pointer list-none'
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/about">
                                <li
                                    onClick={()=>setMenuOpen(false)}
                                    className='py-4 cursor-pointer list-none'
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li
                                    onClick={()=>setMenuOpen(false)}
                                    className='py-4 cursor-pointer list-none'
                                >
                                    Contact
                                </li>
                            </Link>
                            <Link href="/services">
                                <li
                                    onClick={()=>setMenuOpen(false)}
                                    className='py-4 cursor-pointer list-none'
                                >
                                    Services
                                </li>
                            </Link>
                            <Link href="/blog">
                                <li
                                    onClick={()=>setMenuOpen(false)}
                                    className='py-4 cursor-pointer list-none'
                                >
                                    Blog
                                </li>
                            </Link>
                    </div>
                    <div className='flex flex-row justify-around pt-10 items-center'>
                        <AiOutlineInstagram size={30} className='cursor-pointer'/>
                        <AiOutlineFacebook size={30} className='cursor-pointer'/>
                        <AiOutlineTwitter size={30} className='cursor-pointer'/>
                        <AiOutlineLinkedin size={30} className='cursor-pointer'/>
                    </div>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt='Logo'
                            width='205'
                            height='75'
                            className='cursor-pointer pt-6'
                            priority
                        />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
