document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      perPage: 3,
      focus: "0",
      trimSpace: false,
      gap: "2em",
      perMove: 1,
      rewind: true,
      breakpoints: {
        768: {
          perPage: 2,
          gap: "1.5em",
        },
        480: {
          perPage: 1,
          gap: "1.5em",
        },
      },
    }).mount();
});
