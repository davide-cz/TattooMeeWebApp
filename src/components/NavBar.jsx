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
            
            
            
                <nav className={`min-h-12  ${isVisible ? 'h-28':'h-auto ' }nav-bar  flex justify-between border-zinc-950  
                                border-b-4  bg-gradient-to-b from-zinc-900
                                to-zinc-950 p-2 text-gray-400`}>
                    <div>
                        <button className="border-2 p-2 border-gray-500 rounded-md flex hover:bg-gray-400 hover:text-gray-800 transition" onClick={()=>{setIsVisible(!isVisible)}}>
                            <IoMenu className=' nav-icon'/>
                        </button>
                    </div>
                        {isVisible && 
                        <div className="nav-bar">
                            <div className="navLink-container flex">

                                <div className="my-auto nav-element">
                                    <NavLink to={'/'}>
                                        Home
                                    </NavLink>
                                </div>                
                                <div className="my-auto nav-element">
                                    <NavLink to={'/booking'}>
                                        Prenota
                                    </NavLink>
                                </div>
                                <div className="my-auto nav-element">
                                    <NavLink to={'/about-us'}>
                                        About Us
                                    </NavLink>
                                </div>
                                <div  className="my-auto nav-element" >
                                
                                </div>
                                <div  className="flex nav-element my-auto gap-x-4" >{
                                    userId  ? 
                                    <NavLink to={'/personal-area'}>
                                        <FaUserCircle className='nav-icon'/>
                                    </NavLink>
                                    :
                                    <NavLink to={'/login'}>
                                        Log-in
                                    </NavLink>
                                    }
                                    {
                                        userId &&
                                        <button onClick={logout}>
                                            <BiLogOut className=' nav-icon' />
                                        </button>

                                    }
                                </div>
                            </div>
                        </div>
                    }
                </nav>
        </>
    )
}