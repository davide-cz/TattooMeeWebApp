import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const {VITE_URI} = import.meta.env;

const Home = () => {
 /*  const [artists, setArtists] = useState([]);

  // Effettua la chiamata API per ottenere i tatuatori
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${VITE_URI}/artists`);
        setArtists(response.data);
      } catch (error) {
        console.error('Errore nel recuperare i tatuatori', error);
      }
    };
    fetchArtists();
  }, []);
 */

      {/* <h2>Tatuatori Disponibili</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist._id}>{artist.name} - {artist.email}</li>
        ))}
      </ul> */}

  return (
    <div className='backgroundImage justify-middle items-center align-middle h-full w-full '>
      <div className='mx-auto mt-20 h-60 w-60 bg-gray-600  rounded-full border-4 border-stone-800'>

      </div>
      <div className='flex gap-4 pt-20 justify-center m-auto'>
   
        <button className='btn' >
          <Link to={'/tattooer'}>
            Tattoo artists
          </Link>
        </button>
        <button className='btn '>
          <Link to={'/booking'}>
            Prenotazione
          </Link></button>
        </div>
    </div>
  );
};

export default Home;
