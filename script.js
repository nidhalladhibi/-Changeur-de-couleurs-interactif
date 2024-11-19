// Exécute le code une fois le DOM entièrement chargé
document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments nécessaires
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Fonction pour générer une couleur hexadécimale aléatoire
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Ajout d'un écouteur d'événement pour changer la couleur
  changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
