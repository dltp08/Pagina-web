const express = require('express');
const cors = require('cors');
const { conexion } = require('../db-config/conexion');
const rutasReservas = require('./routes/reservas');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/reservas', rutasReservas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor de reservas corriendo en el puerto ${PORT}`);
});
