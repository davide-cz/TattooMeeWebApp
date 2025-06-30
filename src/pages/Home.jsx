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
    <div className={`form-item backgroundImage  justify-middle  items-center  scrolling-component align-middle  h-full w-full ${smoothTransition}`}>
          <div className='backdrop-blur-md h-full'> {/* layer blurred */}
            
          <div  className='flex m-auto p-2  pt-10 text-zinc-950'>

            <h2 className='text-3xl' >artink tattoo studio </h2>       
          </div>
          <div className='mx-auto mt-20 h-60 w-60 bg-gray-600  rounded-full border-4 border-stone-800'>

          </div>
          <section className="max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-zinc-950 text-center mb-6">Welcome to [Your Studio Name]</h2>
            <p className="text-lg text-slate-200 text-center">
              At <strong>[Your Studio Name]</strong>, we believe that tattoos are more than just ink on skin; they are a form of self-expression, a story, and an art form that lasts a lifetime. 
              Located in the heart of [City Name], we are proud to provide a welcoming and professional space where creativity thrives.
            </p>
            <div className='flex gap-4 pt-10 justify-center m-auto'>
              <button className='btn' >
                <Link to={'/tattooer'}>
                  Tattoo artists
                </Link>
              </button>
              <button className='btn '>
                <Link to={'/booking'}>
                  Prenotazione
                </Link>
              </button>
            </div>
          </section>

          </div>
        </div>
  );
};

export default Home;
