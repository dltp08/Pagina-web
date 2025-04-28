const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
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
