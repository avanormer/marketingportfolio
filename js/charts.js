document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const width = bar.dataset.width || "0%";

    setTimeout(() => {
      bar.style.width = width;
    }, 400);
  });
});