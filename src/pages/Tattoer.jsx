import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../utilities/AuthContext";
import EditBooking from "../components/EditBooking";
import { Link } from "react-router-dom";

const { VITE_URI } = import.meta.env
export default function () {

  


    const {userId , userName} = useContext(AuthContext)

    //appointment con nome user --n di telefono --- data --- confermato o cancellato
    //possibilità di edit per cambio data 

    const [appointments,setAppointments]=useState([])
          //----------- funzione che elimina un appuntamento 
    
          const deleteAppointment = async (id)=>{
            try{ 
                const response = await axios.delete(`${VITE_URI}/booking/${id}`)
                console.log('eliminazione riuscita')
            }catch (error) {
              console.error(`Errore nella cancellazione dell'appuntamento`, error);
            } 
          };


    useEffect(() => {
        const fetchAppointment = async () => {
          try {
            const response = await axios.get(`${VITE_URI}/user/${userId}`);
            setAppointments(response.data);
          } catch (error) {
            console.error('Errore nel recuperare gli appuntamenti', error);
          } 
        };
        fetchAppointment();
      }, []);
      


    return (
        <>
            <div className="m-auto justify-center gap-4 w-full align-middle ">
                {appointments.map((ap,i)=>{
                  return (
                    <Link key={ap.clientName} to={`/personal-area/appointments/${ap._id}`}>
                    
                      <div className= "text-zinc-900 flex align-middle  p-4 h-24  border-black border-2" key={`client ${i}`}>
                        <div className="w-1/2 py-4 flex items-center">
                          <h2>{ap.clientName}</h2>
                          <h2>{ap.date?.slice(0,10)}</h2>
                        </div>
                        <button className="m-auto p-2 border-2" onClick={()=>deleteAppointment( ap._id )} >X</button>
                      </div>
                    </Link>
                  )
                })}
                
            </div>
        </>
    )
}