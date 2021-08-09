document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    perPage: 3,
    gap: "2em",
    perMove: 1,
    breakpoints: {
      768: {
        perPage: 2,
        gap: "1.5em",
      },
      480: {
        perPage: 1.2,
        gap: "1.5em",
      },
    },
  }).mount();
});
