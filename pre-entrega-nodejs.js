// Alumna: Sandra Lopez 
// pre-entrega-nodejs.js


const [, , metodo, recurso, title, price, category] = process.argv;

if (metodo === 'GET') {
  fetch(`https://fakestoreapi.com/${recurso}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
}

if (metodo === 'DELETE') {
  fetch(`https://fakestoreapi.com/${recurso}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
}

if (metodo === 'POST') {
  fetch(`https://fakestoreapi.com/${recurso}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, price, category })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
}