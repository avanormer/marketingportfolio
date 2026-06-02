 window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");

  if (!nav) return;

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
    nav.style.background = "rgba(248,245,239,0.95)";
  } else {
    nav.style.boxShadow = "none";
    nav.style.background = "rgba(248,245,239,0.85)";
  }
});