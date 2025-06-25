import React, { useEffect, useState } from 'react';
import Artists from './Artists';
import { Link } from 'react-router-dom';

export default function ()  {

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
    <div className={`form-item bg-gray-100 text-gray-800 scrolling-component w-full ${smoothTransition}`}>
      {/* Header */}
      <header className="bg-gray-900 text-white text-center py-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-lg italic">Where art meets passion.</p>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to [Your Studio Name]</h2>
        <p className="text-lg text-center">
          At <strong>[Your Studio Name]</strong>, we believe that tattoos are more than just ink on skin; they are a form of self-expression, a story, and an art form that lasts a lifetime. 
          Located in the heart of [City Name], we are proud to provide a welcoming and professional space where creativity thrives.
        </p>
      </section>

      {/* Meet Our Artists */}
      <section className="bg-white text-neutral-300 py-12 px-4 ">
        <h2 className="text-3xl font-bold  text-neutral-800 text-center mb-6">Meet Our Artists</h2>
        <p className="text-lg text-center text-neutral-800 mb-8">
          Our team of skilled tattoo artists brings years of experience, passion, and talent to every piece they create.
        </p>
        <div className='flex ' >
            <button className='btn m-auto  ' >
            <Link to={'/tattooer'}>
                Tattoo artists
            </Link>
            </button>
        </div>
        
      </section>

      {/* Our Values */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Creativity:</strong> We treat every tattoo as a unique piece of art.
          </li>
          <li>
            <strong>Safety:</strong> We adhere to the highest hygiene standards to ensure a safe environment.
          </li>
          <li>
            <strong>Community:</strong> We value our clients and build lasting relationships based on trust and mutual respect.
          </li>
        </ul>
      </section>

      {/* Studio Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Studio</h2>
        <p className="text-lg text-center mb-6">
          Our studio is designed to be both professional and inviting, with private rooms for longer sessions and a friendly environment for consultations.
        </p>
        <img
          src="/images/studio.jpg"
          alt="Our Studio"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Call to Action */}
      <footer className="bg-gray-900 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Ready to Get Inked?</h2>
        <p className="mt-4 text-lg">Visit us or book your consultation today!</p>
        <a
          href="/booking"
          className="mt-6 inline-block btn"
        >
          Book Now
        </a>
      </footer>
    </div>
  );
};
