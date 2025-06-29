import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../utilities/AuthContext";
import { useNavigate } from "react-router";
import EditBooking from "../components/EditBooking";
import { Link } from "react-router-dom";

const { VITE_VERCEL_URI } = import.meta.env
export default function () {

const navigate = useNavigate();


    const {userId , userName} = useContext(AuthContext)

    //appointment con nome user --n di telefono --- data --- confermato o cancellato
    //possibilità di edit per cambio data 

    const [appointments,setAppointments]=useState([]);

    // state per mostrare solo i valori con indice 'i'
    const [showDeleteOpt, setShowDeleteOpt] = useState(new Array(5).fill(false))

    const toggleshowDeleteOpt = (index) => {
      const newDeleteopt = [...showDeleteOpt];
      newDeleteopt[index] = !newDeleteopt[index];
      setShowDeleteOpt(newDeleteopt);
    };
    
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


    useEffect(() => {
        const fetchAppointment = async () => {
          try {
            const response = await axios.get(`${VITE_VERCEL_URI}/user/${userId}`);
            setAppointments(response.data);
          } catch (error) {
            console.error('Errore nel recuperare gli appuntamenti', error);
          } 
        };
        fetchAppointment();
      }, [deleteAppointment]);
      
      const [confirmDelete, setConfirmDelete] = useState(false);

    return (
        <>
            <div className="gap-4 w-full align-middle ">
              {appointments.length === 0 && 
              <h1>
                nessuna prenotazione
              </h1>
              }
                {appointments?.map((ap,i)=>{
                  return (
                    <div className="mb-4 p-4 " key={`${ap.clientName} ${i}`}>

                      <Link key={ap.clientName} to={`/personal-area/appointments/${ap._id}`}>
                      
                        <div className= "text-zinc-400 p-4 rounded-md border-black border-2 " key={`client ${i}`}>
                          <div className="w-1/2 py-4 grid grid-cols-2 ">
                            <div>
                              <h2>{ap.clientName}</h2>
                              <h2>{ap.date?.slice(0,10)}</h2>
                            </div>
                            <p>{ap.description}</p>
                          </div>
                        </div>
                      </Link>
                      {/* <div className="m-auto">
                        <button className="p-2 mx-auto border-2" 
                          onClick={()=>toggleshowDeleteOpt(i)
                          } >elimina appuntamento</button>
                      </div>
                      {
                          showDeleteOpt[i] &&
                        <div>
                          <p>vuoi eliminare l'appuntamento selezionato?</p>
                          <button className="m-auto p-2 border-2" 
                            onClick={()=>deleteAppointment( ap._id )
                            } >elimina appuntamento</button>
                          <button className="m-auto p-2 border-2" 
                            onClick={()=>toggleshowDeleteOpt(i)
                            } >annulla</button>

                        </div> 
                      } */}
                    </div>
                  )
                })}
                
            </div>
        </>
    )
}