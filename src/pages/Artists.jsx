import { useEffect, useState } from "react";

import axios from 'axios';
import SingleArtist from "../components/SingleArtist";



export default function (){


    
  const {VITE_MONGO_URI} = import.meta.env;

  const rndBackGround = Math.ceil(Math.random()*3)+1

    const [artists, setArtists] = useState([]);

    // Effettua la chiamata API per ottenere i tatuatori
    useEffect(() => {
      const fetchArtists = async () => {
        try {
          const response = await axios.get(`${VITE_MONGO_URI}/user/tattooer`);
          setArtists(response.data);
        } catch (error) {
          console.error('Errore nel recuperare i tatuatori', error);
        }
      };
      fetchArtists();
    }, []);
    return (
        <div className="backgroundImage artist-page h-full w-full">
          <div className="flex p-20">
            <h2 className="text-lg font-bold m-auto">Tatuatori Disponibili</h2>
          </div>
            <div className="flex gap-8 gap-y-20 flex-shrink-0 flex-wrap justify-center ">
                {artists.map(artist => (
                <SingleArtist 
                    key={artist._id}
                    name={artist.name}
                    description={artist.description}
                    showButton={false}
                    />
                    
                ))}
            </div>
        </div>
    )
}