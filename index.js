const fs = require("fs");
const request = require("request");

let url = "https://es.wikipedia.org/wiki/Manga";

request(url, (error, response, html) => {
  let texto = html.toString();
  let archivo = "HtmlFile.txt";
  fs.writeFile(archivo, texto, (err) => {
    if (err) throw err;
  });
});
