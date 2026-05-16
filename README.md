Pre-Entrega Node.js — FakeStore CLI

Herramienta de terminal construida con Node.js que interactúa con la API de FakeStore. Permite listar, crear y eliminar productos mediante comandos desde la consola.

Comandos disponibles:

# Listar todos productos
npm run start GET products

# Listar un producto específico
npm run start GET products/15

# Crear un producto
npm run start POST products T-Shirt-Rex 300 remeras

# Eliminar un producto
npm run start DELETE products/7

Tecnologías usadas:

- Node.js
- Fetch API
- FakeStore API
