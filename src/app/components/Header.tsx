'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 200 ? setIsScrolled(true) : setIsScrolled(false);
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const opacity = isScrolled ? 'bg-opacity-80' : '';
    
    return (
        <header className={ `bg-gray-800 fixed w-full transition-all duration-500 z-50 px-8 md:px-16 py-3 md:py-0 md:pr-64 lg:pr-16 ${opacity}` }>
            <div className="flex justify-between items-center ">
                <div>
                    <p className="text-2xl font-bold text-white">Japhé</p>
                </div>
                <button
                    className="md:hidden block text-white"
                    onClick={ () => setIsMenuOpen(!isMenuOpen) }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        { isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
                        ) }
                    </svg>
                </button>
                <Navbar isMenuOpen={ isMenuOpen } setIsMenuOpen={ setIsMenuOpen } />
            </div>
        </header>
    );
};

export default Header;
