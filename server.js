const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para procesar solicitudes JSON

// Configura la conexión a PostgreSQL
const pool = new Pool({
  user: 'devangel',
  host: 'localhost',
  database: 'recicladora',
  password: 'TACOS123',
  port: 5432,
});

// API para obtener datos de PostgreSQL
app.get('/api/datos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes'); // Cambia 'tu_tabla' por el nombre real de tu tabla
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

// API para insertar datos en PostgreSQL
app.post('/api/datos', async (req, res) => {
  try {
    const { nombre } = req.body;
    const result = await pool.query('INSERT INTO clientes (nombre) VALUES ($1) RETURNING *', [nombre]); // Cambia 'tu_tabla' por el nombre real de tu tabla
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
