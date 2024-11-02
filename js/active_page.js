document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href") === currentPath) {
      navLinks[i].classList.add("active");
      return;
    }
  }
});
