document.getElementById('pedidoForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
  
    if (!nombre || !email || !producto || isNaN(cantidad) || cantidad < 1) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
  
    // Enviar los datos al backend
    fetch('http://localhost:3000/api/pedidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, producto, cantidad })
    })
    .then(response => response.json())
    .then(data => {
      alert(data.mensaje || 'Pedido enviado con éxito');
      document.getElementById('pedidoForm').reset();
    })
    .catch(error => {
      console.error('Error al enviar pedido:', error);
      alert('Error al enviar el pedido');
    });
  });
  