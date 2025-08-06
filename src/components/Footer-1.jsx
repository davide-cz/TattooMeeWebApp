import { Link } from "react-router-dom";
import AuthContext from "../utilities/AuthContext";
import { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function (){
    
    const {userId , username} = useContext(AuthContext)
    return (
        <footer className="bg-gradient-to-b from-zinc-800 to-gray-950 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-lg font-bold mb-4 bg-gray-600 border-4 h-32 w-32 rounded-full md:mb-0">
                    
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-amber-400">Artink Tattoo Studio</h3>
                                <p className="text-gray-400 text-sm">Professional Tattoo & Piercing</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Creating exceptional tattoo art since [Year]. We combine artistic vision with 
                            technical expertise to bring your ideas to life in a clean, professional environment.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-amber-400 mr-2" />
                                <span className="text-sm">[Your Address], [City], [Country]</span>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-amber-400 mr-2" />
                                <span className="text-sm">[Your Phone Number]</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-amber-400 mr-2" />
                                <span className="text-sm">[Your Email]</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-amber-400 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to={'/'} className="hover:text-amber-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'/tattooer'} className="hover:text-amber-400 transition-colors text-sm">
                                    Our Artists
                                </Link>
                            </li>
                            <li>
                                <Link to={'/booking'} className="hover:text-amber-400 transition-colors text-sm">
                                    Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to={'/about-us'} className="hover:text-amber-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services & Social */}
                    <div>
                        <h4 className="text-lg font-semibold text-amber-400 mb-4">Services</h4>
                        <ul className="space-y-2 mb-6">
                            <li className="text-sm text-gray-400">Custom Tattoos</li>
                            <li className="text-sm text-gray-400">Cover-ups</li>
                            <li className="text-sm text-gray-400">Piercings</li>
                            <li className="text-sm text-gray-400">Touch-ups</li>
                        </ul>
                        
                        <h4 className="text-lg font-semibold text-amber-400 mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                                         hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                                         hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                                         hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-6 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center text-gray-500 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} [Your Studio Name]. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#privacy" className="text-gray-500 hover:text-amber-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-500 hover:text-amber-400 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

