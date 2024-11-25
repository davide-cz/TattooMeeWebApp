import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800  text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo or Brand */}
                    <div className="text-lg font-bold mb-4 bg-gray-600 border-4 h-32 w-32 rounded-full md:mb-0">
                      
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6 mb-4 md:mb-0">
                        <li>
                            <a href="#home" className="hover:text-gray-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm mt-4">
                    &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
