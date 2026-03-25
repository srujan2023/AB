function initHeaderNav(root = document) {
  const navToggle = root.querySelector(".nav-toggle");
  const primaryNav = root.getElementById("primary-nav");

  if (!navToggle || !primaryNav) return;

  const closeNav = () => {
    primaryNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    primaryNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.contains("is-open");
    if (isOpen) closeNav();
    else openNav();
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeNav();
  });

  document.addEventListener("click", (event) => {
    if (!primaryNav.classList.contains("is-open")) return;
    if (primaryNav.contains(event.target) || navToggle.contains(event.target)) return;
    closeNav();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
}

function initFooterYear(root = document) {
  const year = root.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function init() {
  initHeaderNav(document);
  initFooterYear(document);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
