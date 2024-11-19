import React, { useState } from 'react';
import axios from 'axios';


const { VITE_VERCEL_URI } = import.meta.env

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${VITE_VERCEL_URI}/user/signup`, {
        name,
        email,
        password,
      });

      // Salva il token nel localStorage
      localStorage.setItem('token', response.data.token);

      alert('Registrazione completata con successo');
    } catch (error) {
      console.error('Errore durante la registrazione', error);
      alert('Errore durante la registrazione');
    }
  };

  return (
    <div>
      <h2>Registrati</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignup}>Registrati</button>
    </div>
  );
};

export default Signup;