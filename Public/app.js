//Profession Code
const professions = [
  "Network Engineer",
  "Software Developer",
  "DevOps Engineer",
];
let professionIndex = 0;
let charIndex = 0;
const professionElement = document.getElementById("profession");

function typeProfession() {
  if (charIndex < professions[professionIndex].length) {
    professionElement.textContent +=
      professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeProfession, 50);
  } else {
    setTimeout(() => {
      professionElement.textContent = "";
      professionIndex = (professionIndex + 1) % professions.length;
      charIndex = 0;
      typeProfession();
    }, 1750); // Pause for 2 seconds before typing the next profession
  }
}

typeProfession(); // Start the typing animation

// navigation mobile script

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
