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
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [statoPrenotazione, setStatoPrenotazione] = useState('');
  const [showForm, setShowForm] = useState('');


  useEffect(() => {
    // Carica i dettagli della prenotazione quando il componente viene montato
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${VITE_VERCEL_URI}/booking/${id}`);
        setBooking(response.data);
        setDate(response.data.date);
        setTime(response.data.time);
        setDescription(response.data.description);
        setStatoPrenotazione(response.data.status);
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
        description
      });

      setMessage('Prenotazione aggiornata con successo');
      setBooking(response.data); // Aggiorna il booking con i nuovi dati
      setStatoPrenotazione('confirmed')
    } catch (error) {
      setError('Errore durante l\'aggiornamento della prenotazione');
      console.error('Errore:', error);
    }
  };

  if (!booking) return <p>Caricamento dettagli della prenotazione...</p>;

  return (
    <>
      <dialog ref={dialogRef} className='dialog-booking' >
        <div className='flex justify-end'>
          <button className='close-btn btn' onClick={()=>setIsOpen()}>X</button>
        </div>
        <div className='justify-start h-[600px]] align-middle ' >
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
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    </label>
                    <br />
                    <label>
                    Ora:
                    <input
                        type="string"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    </label>
                    <label>
                    Descrizione:
                    <input
                        type="string"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </label>
                    <br />
                    <p>stato prenotazione: {`${statoPrenotazione==='pending' ? 'sospeso' : 'confermato'}`}</p>
                </div>
                <div className='flex justify-center'>
                  <button className='px-4 border-2 btn' onClick={handleUpdate}>Aggiorna</button>
                </div>
            </div>
        </div>
      </dialog>
    </>
  );
};

export default EditBooking;
