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
            <ul className='hidden md:flex'>
                <li className='unexpected-1'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='unexpected-1'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='unexpected-1'>
                    <Link to="project" smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                
                <li className='unexpected-1'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className='unexpected-1'>
                    <a href="https://drive.google.com/file/d/1tUqACv6bDTiMtPnHfOt-2ACMPb1PSEc4/view?usp=sharing"> Resume</a>
                       
                    
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='hover-link py-6 text-4xl'> <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='hover-link py-6 text-4xl'><Link to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li className='hover-link py-6 text-4xl'><Link to="project" smooth={true} duration={500}>
                        Project
                    </Link></li>
                <li className='hover-link py-6 text-4xl'> <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
                <li className='hover-link py-6 text-4xl'><Link to="resume" smooth={true} duration={500}>
                        Resume
                    </Link></li>
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