import responsible from "./responsible.js";

responsible({
  id: "youtube",
  mq: "(min-width: 1024px)",
  desktopContent: `<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cJQi9HisSCQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      ></iframe>`,
  mobileContent: `<a href='https://youtu.be/cJQi9HisSCQ'></a>`,
});

responsible({
  id: "gmaps",
  mq: "(min-width: 1024px)",
  mobileContent: `<a href='https://goo.gl/maps/EeyGHRX7dkAQt1rK8'></a>`,
  desktopContent: `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.387162636147!2d-62.060319913098205!3d9.066612102206026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcae0170eda5c55%3A0x7a8ab8c44bb4988e!2sUniversidad%20Territorial%20Deltaica%20%22Francisco%20Tamayo%22!5e1!3m2!1ses!2sve!4v1627161619261!5m2!1ses!2sve"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    ></iframe>`,
});
