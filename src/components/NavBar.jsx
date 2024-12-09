import { Link } from "react-router-dom";
import AuthContext from "../utilities/AuthContext";
import { useContext } from "react";



export default function (){

    
    const {userId , username} = useContext(AuthContext)


    return (
        <>
            <nav className=" flex justify-between h-28  w-full  border-zinc-950 
                            border-b-4  bg-gradient-to-b from-zinc-900
                            to-zinc-950 p-2 text-gray-400">
                <div className="my-auto nav-element">
                    <Link to={'/'}>
                        NomeStudio
                    </Link>
                </div>
                <div  className="my-auto nav-element" >
                   
                </div>
                <div  className="nav-element my-auto" >{
                    userId  ? 
                    <Link to={'/personal-area'}>
                        <p>{username}</p>
                    </Link>
                    :
                    <Link to={'/login'}>
                        Log-in
                    </Link>
                    }
                </div>
            </nav>
        </>
    )
}