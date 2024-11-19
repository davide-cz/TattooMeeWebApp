import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import EditBooking from "./EditBooking";



const { VITE_VERCEL_URI }= import.meta.env

export default function (/* {name , number , description , date} */){


    
    const {id}=useParams();
    //booking component che mostra dati completi della prenotazione
    // e la possibilità di modificare alcune parti data/ora
    
    const [singBook,setSingBook]=useState({});
    const [isOpen,setIsOpen]=useState(false)

    useEffect(()=>{

        const fetchABooking = async ()=>{
        try{
            const response= await  axios.get(`${VITE_VERCEL_URI}/booking/${id}`)
            setSingBook(response.data)
        }
        catch(error){
            console.error('Errore nel caricamento della prenotazione', error);
        }
    }
    fetchABooking();
    },[id ]);


    const { clientName , userNumber , description , date} = singBook;

    const realDate =singBook.date ? singBook.date.toString().slice(0 , 10) : null;

    const yyyy=realDate?.slice(0 , 4)
    const mm=realDate?.slice(5 , 7)
    const dd=realDate?.slice(8 , 10)

    
    
    return (
        <>
        <div className="appointment-card m-auto">
            <h2>{clientName}</h2>
            <h3>Tel: {userNumber}</h3>
            <h4>Giorno: {`${dd}-${mm}-${yyyy}`}</h4>
            <p>{description}</p>
            <button 
                    onClick={()=>{
                        setIsOpen(true)
            }}>modifica</button>
                <EditBooking
                id={id}
                currentDate={date}
                isOpen={isOpen}
                setIsOpen={c=>{setIsOpen(c)}}
                />
        </div>
        </>
    )
}