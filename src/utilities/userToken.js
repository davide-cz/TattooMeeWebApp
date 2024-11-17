export default getProtectedData = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get('http://localhost:5000/api/protected-route', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Errore durante la richiesta alla rotta protetta', error);
    }
  };