import { Link, NavLink } from "react-router-dom";
import AuthContext from "../utilities/AuthContext";
import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";


export default function (){

    const [isVisible, setIsVisible]=useState(false)
    
    const {userId , username , logout } = useContext(AuthContext)


    return (
        <>
            
            
            
               <nav className={` ${isVisible ? 'h-auto':'h-auto'} nav-bar flex justify-between 
                            bg-gray-950/95 backdrop-blur-md border-b border-gray-800 
                            shadow-lg shadow-black/20 p-4 text-gray-300 relative z-50`}>
                <div className="flex ">
                    <button 
                        className="border-2 md:items-start border-gray-700 p-3 rounded-lg flex items-center justify-center 
                                 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300
                                 w-12 h-12" 
                        onClick={()=>{setIsVisible(!isVisible)}}
                    >
                        <IoMenu className='w-6 h-6  '/>
                    </button>
                    <div className={`ml-4 hidden sm:block ${isVisible && 'sm:my-1' } my-auto `}>
                        <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                            Artink Studio
                        </span>
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <NavLink to={'/'} className="nav-element">
                        Home
                    </NavLink>
                    <NavLink to={'/booking'} className="nav-element">
                        Book Now
                    </NavLink>
                    <NavLink to={'/tattooer'} className="nav-element">
                        Artists
                    </NavLink>
                    <NavLink to={'/about-us'} className="nav-element">
                        About Us
                    </NavLink>
                    <div className="flex items-center space-x-4">
                        {userId ? (
                            <>
                                <NavLink to={'/personal-area'} className="nav-element">
                                    <FaUserCircle className='w-6 h-6'/>
                                </NavLink>
                                <button 
                                    onClick={logout}
                                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                >
                                    <BiLogOut className='w-6 h-6' />
                                </button>
                            </>
                        ) : (
                            <NavLink to={'/login'} className="btn text-sm px-4 py-2">
                                Sign In
                            </NavLink>
                        )}
                    </div>
                </div>
                
                {/* Mobile Navigation */}
                {isVisible && (
                    <div className=" top-full left-0 w-full bg-gray-950/98 backdrop-blur-md 
                                  border-b border-gray-800 shadow-2xl lg:hidden">
                        <div className="flex flex-col p-4 space-y-2">
                            <NavLink 
                                onClick={()=>setIsVisible(false)} 
                                to={'/'} 
                                className="nav-element block py-3 px-4 rounded-lg hover:bg-gray-800/50"
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                onClick={()=>setIsVisible(false)} 
                                to={'/booking'} 
                                className="nav-element block py-3 px-4 rounded-lg hover:bg-gray-800/50"
                            >
                                Book Appointment
                            </NavLink>
                            <NavLink 
                                onClick={()=>setIsVisible(false)} 
                                to={'/tattooer'} 
                                className="nav-element block py-3 px-4 rounded-lg hover:bg-gray-800/50"
                            >
                                Our Artists
                            </NavLink>
                            <NavLink 
                                onClick={()=>setIsVisible(false)} 
                                to={'/about-us'} 
                                className="nav-element block py-3 px-4 rounded-lg hover:bg-gray-800/50"
                            >
                                About Us
                            </NavLink>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                {userId ? (
                                    <div className="flex items-center space-x-4">
                                        <NavLink 
                                            onClick={()=>setIsVisible(false)} 
                                            to={'/personal-area'}
                                            className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-800/50"
                                        >
                                            <FaUserCircle className='w-5 h-5'/>
                                            <span>Profile</span>
                                        </NavLink>
                                        <button 
                                            onClick={() => {logout(); setIsVisible(false);}}
                                            className="flex items-center space-x-2 py-2 px-4 rounded-lg 
                                                     text-red-400 hover:bg-red-400/10"
                                        >
                                            <BiLogOut className='w-5 h-5' />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                ) : (
                                    <NavLink 
                                        onClick={()=>setIsVisible(false)} 
                                        to={'/login'} 
                                        className="btn inline-block"
                                    >
                                        Sign In
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}