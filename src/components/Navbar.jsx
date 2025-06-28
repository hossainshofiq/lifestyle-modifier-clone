'use client';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
    const pathname = usePathname();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='fixed top-0 w-full bg-white shadow-sm z-50'>
            <div className='max-w-screen-3xl flex flex-wrap justify-between items-center mx-auto p-4'>
                {/* Logo and Brand */}
                <div className='flex items-center'>
                    <Link href={"/"}>
                        <Image
                            src="/assets/main_logo_fav.png"
                            alt="MD ABDUL KAIYUM Logo"
                            width={130}
                            height={52}
                            priority={true}
                            quality={100}
                            className="h-auto object-contain"
                            style={{
                                width: 'auto',
                                maxWidth: '100%',
                            }}
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center text-sm space-x-4">
                    <Link
                        href="#home"
                        className={`${pathname === '/' ? '' : ''} hover:text-blue-700 transition-colors`}
                    >
                        হোম
                    </Link>
                    <Link
                        href="#our_services"
                        className={`${pathname === '/our_services' ? '' : ''} hover:text-blue-700 transition-colors`}
                    >
                        সেবা
                    </Link>
                    <Link
                        href="#review"
                        className={`${pathname === '/review' ? '' : ''} hover:text-blue-700 transition-colors`}
                    >
                        রিভিউ
                    </Link>
                    <Link
                        href="#about_us"
                        className={`${pathname === '/#about' ? '' : ''} hover:text-blue-700 transition-colors`}
                    >
                        আমাদের সম্পর্কে
                    </Link>
                    <Link
                        href="#contact_us"
                        className={`${pathname === '/#contact' ? '' : ' '} hover:text-blue-700 transition-colors`}
                    >
                        যোগাযোগ
                    </Link>
                    <Link
                        href="/faq"
                        className={`${pathname === '/#contact' ? '' : ''} hover:text-blue-700 transition-colors text-xl`}
                    >
                        FAQ
                    </Link>


                    <button className="px-2 py-1 bg-blue-700 text-white rounded-sm hover:bg-blue-800 transition-colors">
                        বুক অ্যাপয়েন্টমেন্ট
                    </button>

                    <button className="px-2 py-1 bg-blue-700 text-white rounded-sm hover:bg-blue-800 transition-colors">
                        BMI Calculator
                    </button>

                    <button className="px-2 py-1 bg-blue-700 text-white rounded-sm hover:bg-blue-800 transition-colors">
                        Download App
                    </button>

                    <button className="px-2 py-1 bg-blue-700 text-white rounded-sm hover:bg-blue-800 transition-colors">
                        লগিন করুন
                    </button>
                    <a href='https://peacehoney.in/' target='_blank' className="flex items-center gap-2">
                        <MdShoppingCart className='text-blue-700 text-3xl'></MdShoppingCart>
                        <span className=' text-black hover:text-blue-500 transition-colors text-xl'>Shop Now</span>
                    </a>


                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FiMoon size={20}></FiMoon> : <FiSun size={20}></FiSun>}
                    </button>
                </div>
                {/* <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-xl'>
                    <li><a className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' aria-current="page" id='home_menu'>হোম</a></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-4 space-y-4">
                    <Link
                        href="/"
                        className={`block py-2 ${pathname === '/' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className={`block py-2 ${pathname === '/#about' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/#services"
                        className={`block py-2 ${pathname === '/#services' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/#contact"
                        className={`block py-2 ${pathname === '/#contact' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="block py-2 text-left text-gray-700 dark:text-gray-300"
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;