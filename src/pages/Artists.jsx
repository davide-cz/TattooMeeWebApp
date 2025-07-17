import { useEffect, useState } from "react";

import axios from 'axios';
import SingleArtist from "../components/SingleArtist";

import { RiLoader5Fill } from "react-icons/ri";



export default function (){

  
    
  const {VITE_VERCEL_URI} = import.meta.env;

  const rndBackGround = Math.ceil(Math.random()*3)+1

    const [artists, setArtists] = useState([]);
    const [piercers, setPiercers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [renderLoading, setRenderLoading] = useState(true);

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
    
    const fetchPiercers = async () => {
      try {
        const response = await axios.get(`${VITE_VERCEL_URI}/user/piercer`);
        setPiercers(response.data);
        setLoading( false )  
      } catch (error) {
        console.error('Errore nel recuperare i piercers', error);
      }
    };
    // Effettua la chiamata API per ottenere i tatuatori
    useEffect(() => {
      fetchPiercers();
    }, []);
    
    //  Smooth Transition per rendering 
    
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      // Ritarda l'attivazione della visibilità per consentire l'animazione
      const timer = setTimeout(() => {
          setIsVisible(true);
        }, 100); // Ritardo opzionale per evitare "flash" iniziale
        return () =>{ clearTimeout(timer)
          setIsVisible(true);
      }; // Pulizia al dismount
    }, [ isVisible ,loading ]);

    const smoothTransition =  isVisible ? 'opacity-100' : 'opacity-0 ';

    return (
          <div className={`form-item bg-slate-900 scrolling-component artists-page ${smoothTransition} w-full `}>
            <div className="flex p-20">
              <h2 className="text-lg font-bold m-auto">Tatuatori Disponibili</h2>            
            </div>
            <div className="h-10 p-10 flex" >
              <p className="m-auto text-lg" >
                Qui puoi vedere i tatuatori del nostro studio con il proprio stile e guardare alcuni dei loro lavori
              </p>
            </div>
            { !loading &&
              <div className={`flex gap-8 gap-y-20 py-20 flex-shrink-0 flex-wrap  justify-center `}>
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