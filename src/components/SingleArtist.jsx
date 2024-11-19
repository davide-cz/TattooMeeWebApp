import axios from "axios";
import { useState } from "react"

export default function ({description , name , btntext , showButton , date ,userNumber,clientName, tattooArtistId }){
    
    const { VITE_VERCEL_URI }= import.meta.env

    const handleBooking = async () => {
        try {
          const response = await axios.post( `${VITE_VERCEL_URI}/booking`, {
            date,
            userNumber,
            tattooArtistId,
            clientName
          });
          console.log(response.data);
        } catch (error) {
          console.error("Errore nella prenotazione", error);
        }
      };
    


    return (
        <div className="card h-[500px] w-[460px] border-2 border-black bg-neutral-950">
            <div className="flex ">
                <div className="prof-container border-4 justify-between bg-neutral-600 border-black rounded-md   h-40 w-60" >
                    {/* <img src="https://source.unsplash.com/random" alt="profile img" /> */}
                </div>
                <div className="pt-20 flex -mt-16 justify-center p-4">
                    <h3 className="font-bold">{name}</h3> 
                </div>
            </div>
            <div className="p-4 max-w-[480px]" >
                {description} 
            </div>
            {showButton && 
            <div className="flex justify-center">
                <button 
                    className="btn "
                    onClick={()=>handleBooking()}
                >{btntext}</button>
            </div>
            }
        </div>
    )
}