import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const { VITE_VERCEL_URI } = import.meta.env

const EditBooking = ( {id , isOpen , setIsOpen }) => {

  
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

  

  const [booking, setBooking] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState('');


  useEffect(() => {
    // Carica i dettagli della prenotazione quando il componente viene montato
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${VITE_VERCEL_URI}/booking/${id}`);
        setBooking(response.data);
        setDate(response.data.date.toString().split('T')[0]);
        setTime(response.data.time);
      } catch (error) {
        console.error('Errore nel caricamento della prenotazione', error);
      }
    };

    fetchBooking();
  }, [id]);

  

  const handleUpdate = async () => {
    setError('');
    setMessage('');
    try {
      // Converti la data al formato 'YYYY-MM-DD' prima dell'invio
      const response = await axios.patch(`${VITE_VERCEL_URI}/booking/${id}`, {
        date,
        time,
      });

      setMessage('Prenotazione aggiornata con successo');
      setBooking(response.data); // Aggiorna il booking con i nuovi dati
    } catch (error) {
      setError('Errore durante l\'aggiornamento della prenotazione');
      console.error('Errore:', error);
    }
  };

  if (!booking) return <p>Caricamento dettagli della prenotazione...</p>;

  return (
    <>
      <dialog ref={dialogRef} className='dialog-booking' >

        <div className='justify-start h-80 align-middle border-4 border-red-700' >
            {/*  <button className='p-2  bg-slate-400' onClick={()=>setShowForm(!showForm)} >modifica</button>
            { showForm &&  */}
            <div className='justify-between' >
                <div className='p-10 '>

                    <h4 className='text-lg font-semibold'>Modifica Prenotazione</h4>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    <label>
                    Data:
                    <input
                        type="date"
                        value={date? date : ''}
                        onChange={(e) => setDate(date ? e.target.value.toString().split('T')[0] : null)}
                    />
                    </label>
                    <br />
                    <label>
                    Ora:
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    </label>
                    <br />
                </div>
                <button className='px-4 border-2' onClick={handleUpdate}>Aggiorna Prenotazione</button>
                <button className='px-4 border-2' onClick={()=>setIsOpen()}>Chiudi finestra</button>
            </div>
        </div>
      </dialog>
    </>
  );
};

export default EditBooking;
