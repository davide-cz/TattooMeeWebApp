import { useEffect, useState } from "react";

import axios from 'axios';
import SingleArtist from "../components/SingleArtist";

import { RiLoader5Fill } from "react-icons/ri";



export default function (){


    
  const {VITE_VERCEL_URI} = import.meta.env;

  const rndBackGround = Math.ceil(Math.random()*3)+1

    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${VITE_VERCEL_URI}/user/tattooer`);
        setArtists(response.data);
        setLoading(false )  
      } catch (error) {
        console.error('Errore nel recuperare i tatuatori', error);
      }
    };
    // Effettua la chiamata API per ottenere i tatuatori
    useEffect(() => {
      fetchArtists();
    }, []);
    

    return (
          <div className="backgroundImage scrolling-component artist-page h-full w-full">
            <div className="flex p-20">
              <h2 className="text-lg font-bold m-auto">Tatuatori Disponibili</h2>
            </div>
            { !loading &&
              <div className="flex gap-8 gap-y-20 flex-shrink-0 flex-wrap  justify-center ">
                  {artists?.map((artist , i)  => (
                  <SingleArtist 
                      key={`${artist._id}-${i}` }
                      name={artist.username}
                      description={artist.description}
                      style={artist.style}
                      showButton={false}
                      />
                  ))}
              </div>
              }
              {
                loading &&
              <div className="h-20 w-20 text-zinc-600 font-bold animate-spin m-auto">
                <RiLoader5Fill className=' icon' />
              </div>
              }
              
          </div>

    )
}