const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sistema_reservas'
});

conexion.connect((error) => {
  if (error) {
    console.error('Error de conexión a la base de datos:', error);
    throw error;
  }
  console.log('✅ Conexión a la base de datos MySQL exitosa');
});

module.exports = { conexion };
