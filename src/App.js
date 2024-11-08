import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import Hero from './hero';
import Features from './features';
import Footer from './footer';
import './App.css';

function App() {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');

  // Obtener datos de la API cuando el componente se monte
  useEffect(() => {
    axios.get('http://localhost:5000/api/datos')
      .then((response) => {
        setDatos(response.data); // Guardar los datos en el estado
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/datos', { nombre })
      .then((response) => {
        setDatos([...datos, response.data]); // Agregar el nuevo dato al estado
        setNombre(''); // Limpiar el campo de entrada
      })
      .catch((error) => {
        console.error('Hubo un error al enviar los datos:', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <h1>Datos de la Base de Datos</h1>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>{dato.nombre}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
