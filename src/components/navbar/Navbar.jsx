import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../../assets/logo.png'
import Napat from '../../assets/party.png'
import './navbar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f5f5f5] text-black z-50'>
            {/* Logo Web */}
            <div>
                <a href="/" className='font-bold font-san text-3xl hover:text-[#05C19C]'>NAPAT</a>
            </div>

            {/*  menu */}
            <ul className='hidden md:flex scroll-container'>
                <li className='unexpected-1'>
                    <a href="#home">Home</a>
                </li>
                <li className='unexpected-1'>
                    <a href="#about">About</a>
                </li>
                <li className='unexpected-1'>
                    <a href="#project">Project</a>
                </li>
                <li className='unexpected-1'>
                    <a href="#contact">Contact</a>
                </li>
                <li className='unexpected-1'>
                    <a href="https://drive.google.com/file/d/1x2Sr3iUiIt7GL7w87Uke1LX4lkRASTh-/view?usp=sharing"> Resume</a>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-20'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center scroll-container'}>
                <li className='hover-link py-6 text-4xl'> <a href="#home">Home</a></li>
                <li className='hover-link py-6 text-4xl'><a href="#about">About</a></li>
                <li className='hover-link py-6 text-4xl'><a href="#project">Project</a></li>
                <li className='hover-link py-6 text-4xl'><a href="#contact">Contact</a></li>
                <li className='hover-link py-6 text-4xl'><a href="https://drive.google.com/file/d/1x2Sr3iUiIt7GL7w87Uke1LX4lkRASTh-/view?usp=sharing"> Resume</a></li>
            </ul>

            {/* Social icons */}
            {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default NavBar