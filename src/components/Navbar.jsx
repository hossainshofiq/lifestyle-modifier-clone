'use client';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='fixed top-0 w-full bg-white shadow-sm z-50 px-8 py-4'>
            <div className='flex justify-between items-center'>
                {/* Logo and Brand */}
                <div className='flex items-center gap-2'>
                    <Link href={"/"}>
                        <Image
                            src="/assets/main_logo_fav.png"
                            alt="MD ABDUL KAIYUM Logo"
                            width={120}
                            height={40}
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
                <div className="hidden md:flex items-center space-x-5">
                    <Link
                        href="/"
                        className={`${pathname === '/' ? '' : ''} hover:text-blue-500 transition-colors`}
                    >
                        হোম
                    </Link>
                    <Link
                        href="/"
                        className={`${pathname === '/our_services' ? '' : ''} hover:text-blue-500 transition-colors`}
                    >
                        সেবা
                    </Link>
                    <Link
                        href="/"
                        className={`${pathname === '/review' ? '' : ''} hover:text-blue-500 transition-colors`}
                    >
                        রিভিউ
                    </Link>
                    <Link
                        href="/#about_us"
                        className={`${pathname === '/#about' ? '' : ''} hover:text-blue-500 transition-colors`}
                    >
                        আমাদের সম্পর্কে
                    </Link>
                    <Link
                        href="/#contact_us"
                        className={`${pathname === '/#contact' ? '' : ' '} hover:text-blue-500 transition-colors`}
                    >
                        যোগাযোগ
                    </Link>
                    <Link
                        href="/faq"
                        className={`${pathname === '/#contact' ? '' : ''} hover:text-blue-500 transition-colors`}
                    >
                        FAQ
                    </Link>


                    <button className="px-2 py-1 bg-blue-600 text-white rounded-sm font-medium hover:bg-blue-700 transition-colors">
                        বুক অ্যাপয়েন্টমেন্ট
                    </button>

                    <button className="px-2 py-1 bg-blue-600 text-white rounded-sm font-medium hover:bg-blue-700 transition-colors">
                        BMI Calculator
                    </button>

                    <button className="px-2 py-1 bg-blue-600 text-white rounded-sm font-medium hover:bg-blue-700 transition-colors">
                        Download App
                    </button>

                    <button className="px-2 py-1 bg-blue-600 text-white rounded-sm font-medium hover:bg-blue-700 transition-colors">
                        লগইন করুন
                    </button>
                    <button className="flex items-center gap-2">
                        <MdShoppingCart className='text-blue-600 text-3xl'></MdShoppingCart>
                        <span className=' text-black hover:text-blue-700 transition-colors text-xl'>Shop Now</span>
                    </button>


                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                </div>

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
                        className={`block py-2 ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className={`block py-2 ${pathname === '/#about' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/#services"
                        className={`block py-2 ${pathname === '/#services' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/#contact"
                        className={`block py-2 ${pathname === '/#contact' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
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

{/* <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                       
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="text-xl font-bold dark:text-white">
                                MD ABDUL KAIYUM
                            </Link>
                            <span className="text-sm text-gray-500 dark:text-gray-300 hidden sm:inline">
                                Lifestyle modifier
                            </span>
                        </div>

                      
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                href="/"
                                className={`${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-500 transition-colors`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`${pathname === '/about' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-500 transition-colors`}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className={`${pathname === '/projects' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-500 transition-colors`}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className={`${pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-500 transition-colors`}
                            >
                                Contact
                            </Link>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {theme === 'dark' ? '🌞' : '🌙'}
                            </button>
                        </div>

                       
                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {theme === 'dark' ? '🌞' : '🌙'}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 dark:text-gray-300 focus:outline-none"
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

                    
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3">
                            <Link
                                href="/"
                                className={`block ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-blue-500 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`block ${pathname === '/about' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-blue-500 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className={`block ${pathname === '/projects' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-blue-500 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className={`block ${pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-blue-500 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    )}
                </div>
            </nav> */}