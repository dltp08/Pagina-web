const express = require('express');
const router = express.Router();
const { conexion } = require('../../db-config/conexion');

router.post('/', (req, res) => {
  const { nombre, email, destino } = req.body;

  if (!nombre || !email || !destino) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
  }

  const query = 'INSERT INTO reservas (nombre, email, destino) VALUES (?, ?, ?)';

  conexion.query(query, [nombre, email, destino], (error, resultados) => {
    if (error) {
      console.error('Error al guardar la reserva:', error);
      return res.status(500).json({ mensaje: 'Error en el servidor al guardar la reserva.' });
    }
    res.status(201).json({ mensaje: 'Reserva creada exitosamente.' });
  });
});

module.exports = router;
