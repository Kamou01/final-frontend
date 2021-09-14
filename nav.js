const navToggle = document.querySelector(".nav-toggle");
const navlinks = document.querySelectorAll(".nav__links");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});