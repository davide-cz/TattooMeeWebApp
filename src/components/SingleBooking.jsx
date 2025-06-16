import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import EditBooking from "./EditBooking";



const { VITE_VERCEL_URI }= import.meta.env

export default function (/* {name , number , description , date} */){

    const[showDeleteOpt,setShowDeleteOpt]=useState(false)

    const navigate = useNavigate();

    //----------- funzione che elimina un appuntamento 
    
          const deleteAppointment = async (id)=>{
            try{ 
                const response = await axios.delete(`${VITE_VERCEL_URI}/booking/${id}`)
                console.log('eliminazione riuscita')
                navigate('/personal-area')
            }catch (error) {
              console.error(`Errore nella cancellazione dell'appuntamento`, error);
            } 
          };

    
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
            <div className="flex justify-between">
                <h2>{clientName}</h2>
                    <Link to={'/personal-area'}>
                        <button className="btn">X</button>                    
                    </Link>
            </div>
            <h3>Tel: {userNumber}</h3>
            <h4>Giorno: {`${dd}-${mm}-${yyyy}`}</h4>
            <p>{description}</p>
            <button className="btn"
                onClick={()=>{
                setIsOpen(true)
                }}>modifica
            </button>
            <button className="btn" 
                onClick={()=>setShowDeleteOpt(true)}>
                elimina
            </button>
            {
                showDeleteOpt &&
                    <div>
                        <p>vuoi eliminare l'appuntamento selezionato?</p>
                        <button className="m-auto p-2 border-2" 
                            onClick={()=>deleteAppointment( ap._id )
                        } >elimina appuntamento</button>
                        <button className="m-auto p-2 border-2" 
                            onClick={()=>setShowDeleteOpt(false)
                        } >annulla</button>

                    </div> 
            }
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