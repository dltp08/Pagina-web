document.getElementById('formReserva').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const nombre = event.target.nombre.value.trim();
    const email = event.target.email.value.trim();
    const destino = event.target.destino.value.trim();
  
    if (!nombre || !email || !destino) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, destino })
      });
  
      if (response.ok) {
        alert('Reserva enviada con éxito!');
        event.target.reset();
      } else {
        alert('Error al enviar la reserva.');
      }
    } catch (error) {
      alert('No se pudo conectar al servidor.');
    }
  });
  