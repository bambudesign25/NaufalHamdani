const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("show"));
});

document.getElementById("year").textContent = new Date().getFullYear();
