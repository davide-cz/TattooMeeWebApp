import axios from 'axios';
import { useEffect, useState } from 'react';

const {VITE_MONGO_URI} = import.meta.env;


/* http://localhost:3000 */

export default  function()  {

  const [artists, setArtists] = useState([]);

  // Effettua la chiamata API per ottenere i tatuatori
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${VITE_MONGO_URI}/artists`);
        setArtists(response.data);
      } catch (error) {
        console.error('Errore nel recuperare i tatuatori', error);
      }
    };
    fetchArtists();
  }, []);

      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [artistId, setArtistId] = useState('');

      const hours = Array.from({ length: 10 }, (v, i) => i + 10);
    
      const handleBooking = async () => {
        console.log(artistId)
        try {
          const response = await axios.post( `${VITE_MONGO_URI}/booking`, {
            date,
            time,
            tattooArtistId: artistId
          });
          console.log(response.data);
        } catch (error) {
          console.error("Errore nella prenotazione", error);
        }
      };

      // ora dell'appuntamento 
      const [appointmentHour,setAppointmentHour]=useState('');
      const handleAppointmentHour= (e)=> setAppointmentHour(e.target.value)
      
      return (
          <div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <select value={time}  onChange={(e) => setTime(e.target.value)} >
            {hours.map((h,i)=>{
              return(
                <option key={`hour ${i}`} value={h}>{h}:00</option>
              )
            })}
          </select>

          <select value={artistId} onChange={(e) => setArtistId(e.target.value)}>
          <option value="" disabled>Seleziona un tatuatore</option>
            {artists.map((art,i)=>{
              return (
                <option key={`art${i}`}value={art._id}>{art.name}</option>
              )
            })}
          </select>
          <button onClick={handleBooking}>Prenota</button>
        </div>
      );
    }
      
      
      