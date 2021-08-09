document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-2", {
    type: "loop",
    perPage: 3,
    gap: "2em",
    perMove: 1,
    breakpoints: {
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1.2,
      },
    },
  }).mount();
});
