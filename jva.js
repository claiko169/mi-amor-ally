// Crear corazones flotantes
function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000); // Eliminar corazón después de la animación
}

// Crear varios corazones
setInterval(crearCorazon, 800); // Crear un corazón cada 800ms
