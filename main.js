// ===== main.js =====

document.addEventListener("DOMContentLoaded", () => {

  // ===== ACTIVE LINK HIGHLIGHTING =====
  const currentPage = window.location.pathname.split("/").pop();
  const navMap = {
    "index.html": "nav-home",
    "projects.html": "nav-projects",
    "listings.html": "nav-listings",
    "agent.html": "nav-agent",
    "contact.html": "nav-contact"
  };
  const activeNavId = navMap[currentPage] || "nav-home";
  const activeLink = document.getElementById(activeNavId);
  if (activeLink) activeLink.classList.add("active");

  // ===== HAMBURGER MENU TOGGLE =====
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger && navMenu) 
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    })
});