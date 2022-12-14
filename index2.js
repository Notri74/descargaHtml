const URL = require("https");

const URL = "https://www.sap.com/belgique/index.html";
fetch(URL)
  .then((res) => res.text())
  .then((text) => {
    console.log(text);
  })
  .catch((err) => console.log(err));
