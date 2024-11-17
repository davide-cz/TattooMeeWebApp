import { Link } from "react-router-dom";
import AuthContext from "../utilities/AuthContext";
import { useContext } from "react";



export default function (){

    
    const {userId , username} = useContext(AuthContext)


    return (
        <>
            <nav className=" flex justify-between h-20 fixed w-full border-zinc-950 border-b-4 opacity-90 bg-gradient-to-b from-zinc-700 to-zinc-800 p-2 text-gray-400">
                <div className="nav-element">
                    <Link to={'/'}>
                        NomeStudio
                    </Link>
                </div>
                <div  className="nav-element" >
                    <Link to={'/booking'}>
                        prenota
                    </Link>
                </div>
                <div  className="nav-element" >{
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