import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../utilities/AuthContext';
import { useNavigate } from 'react-router-dom';


const { VITE_VERCEL_URI } = import.meta.env


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  
  const navigate=useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${ VITE_VERCEL_URI }/user/login`, {
        username,
        password,
      });

      // Estrarre `token`, `name`, e `id` dalla risposta del server
      const { token, user } = response.data; 
      const {id } = user;
      

      // Passa `token`, `id`, e `name` a `login`
      login({ token, id, username  });

      /* alert('Login effettuato con successo'); */
      // Reindirizza o aggiorna lo stato dell'applicazione
    } catch (error) {
      setError('username o password non validi');
      console.error('Errore nel login:', error);
    } finally {
      setLoading(false);
      navigate('/personal-area')
    }
  };

  return (
    <div className='min-h-screen flex'>
      <div className='m-auto' >
        <label htmlFor="form" className='flex flex-col w-80 '>
          <h2 className='p-4 -mx-3 ' > Log-in</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            disabled={loading}
            />
          <br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            disabled={loading}
            />
        </label>
        <br/>
        <button className='btn' onClick={ handleLogin } disabled={loading}>
          {loading ? 'Caricamento...' : 'Accedi'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
