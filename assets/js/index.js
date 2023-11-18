const newsButton = document.getElementById("newButton");
const newsInput = document.getElementById("newsInput");
const dateSpan = document.querySelector(".copyrigth span");

let email = "";
newsButton.addEventListener("click", function () {
  email = newsInput.value;
  if (email.trim().length !== 0) {
    alert(
      "Votre adresse " + newsInput.value + " a été enrégistrée avec succès"
    );
    newsInput.value = "";
  }
});

// Récupération de la date actuelle
dateSpan.textContent = new Date().getFullYear();
