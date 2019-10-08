const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css?family=Open+Sans&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const openSans = new FontFaceObserver("Open Sans");

  openSans.load().then(() => {
    document.documentElement.classList.add("openSans");
  });
};

export default Fonts;
