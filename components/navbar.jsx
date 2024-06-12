import React from 'react'
import Image from 'next/image'
import Logo from '../public/next.svg'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
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
                <div>
                    <ul className='hidden sm:flex'>
                        <Link href='/about'>
                            <li className='ml-10 text-xl uppercase transition-all duration-500 hover:border-b hover:border-black hover:transition hover:duration-500'>About</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='ml-10 text-xl uppercase transition-all duration-500 hover:border-b hover:border-black hover:transition hover:duration-500'>Contact Us</li>
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
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
