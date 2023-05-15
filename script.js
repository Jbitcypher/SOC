document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const buttons = card.querySelectorAll(".card-buttons button");
    const sections = card.querySelectorAll(".card-section");

    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section");
      const section = card.querySelector(targetSection);

      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));

      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });
  });
});
