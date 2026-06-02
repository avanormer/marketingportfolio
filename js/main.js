document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".cursor-glow");

  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #fff7e8, #ffffff 45%)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#ffffff";
  });
});