//h1
// Fonction pour simuler l'effet de texte tapé à la machine à écrire
function typeWriterEffect(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          element.innerHTML = ''; // Effacer le texte
          typeWriterEffect(element, text, speed); // Redémarrer l'animation
        }, 5000); // Délai avant de redémarrer l'animation (en millisecondes)
      }
    }, speed);
  }
  // selection de l'element
  const typedTextElement = document.getElementById('typed-text');
  
  // Le texte 
  const textToType = "Bienvenue sur mon portfolio";
  
  // Vitesse 
  const typingSpeed = 80;
  
  // Démarrage de l'animation
  typeWriterEffect(typedTextElement, textToType, typingSpeed);
  