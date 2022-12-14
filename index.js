const fs = require("fs");
const request = require("request");

let url = "https://es.wikipedia.org/wiki/Manga";

request(url, (error, response, html) => {
  // console.log(html.toString());
  let texto = html.toString();
  console.log(texto);
  fs.appendFile("html.txt", texto);
});
