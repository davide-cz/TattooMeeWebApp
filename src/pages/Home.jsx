import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const {VITE_URI} = import.meta.env;

const Home = () => {

  
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
}, [ isVisible ]);

const smoothTransition =  isVisible ? 'opacity-100' : 'opacity-0 ';



  return (
    <div className={`form-item backgroundImage justify-middle items-center align-middle h-full w-full ${smoothTransition}`}>
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
