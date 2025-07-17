import axios from "axios";
import { useEffect, useRef, useState } from "react"
import CarouselContainer from "./CarouselContainer";
import { useNavigate } from "react-router-dom";

export default function ({description , name , btntext , showButton , date ,userNumber ,style ,clientName, isTattooer, tattooArtistId,  }){
    
    const { VITE_VERCEL_URI }= import.meta.env

    const [isOpen, setIsOpen] = useState(false)

    const navigate=useNavigate()

    const handleBooking = async () => {
        try {
          const response = await axios.post( `${VITE_VERCEL_URI}/booking`, {
            date,
            userNumber,
            description,
            tattooArtistId,
            clientName
          });
          console.log(response.data);
          setIsOpen(true)

        } catch (error) {
          console.error("Errore nella prenotazione", error);
        }
      };
    
      
    
    // modal per conferma prenotazione 
    
      const dialogRef=useRef();
    
      useEffect(() => {
        if (dialogRef.current) {
            if (isOpen) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [isOpen]);


    return (
        

            <div className="card h-[620px] w-[350px] border-2 border-black opacity-95  bg-neutral-950">
                <div className="flex ">
                    <div className="prof-container border-4 justify-between bg-neutral-600 border-black rounded-md   h-40 w-60" >
                        {/* <img src="https://source.unsplash.com/random" alt="profile img" /> */}
                    </div>
                    <div className="pt-20 flex -mt-16 justify-center p-4">
                        <h3 className="font-bold">{name}</h3> 
                    </div>
                </div>
                <div className="p-4 max-w-[480px]" >
                    {isTattooer &&
                        <p>
                            Tattoo Style: {style}
                        </p>
                    }
                </div> 
                <CarouselContainer/>
                {showButton && 
                <div className="flex justify-center">
                    <button 
                        className="btn "
                        onClick={()=>handleBooking()}
                    >{btntext}</button>
                </div>
                }
                <dialog ref={dialogRef} className='dialog-booking' >
                    <h2>Prenotazione effettuata</h2>   
                    <p>verrai ricontattato per fissare l'appuntamento</p>   
                    <button className="btn"
                        onClick={()=>{setIsOpen(false);
                                        navigate('/')
                        }} >Chiudi</button> 
                </dialog>
            </div>
    )
}