const fs = require("fs");
//const xhr = require("request");
const xhr = require("https");

var url = "https://es.wikipedia.org/wiki/Manga";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    var response = JSON.parse(xhr.responseText);
    var pageId = Object.keys(response.query.pages)[0];
    var content = response.query.pages[pageId].extract;

    // Guardar el contenido en un archivo de texto
    var file = new Blob([content], { type: "text/plain" });
    var fileName = pageTitle + ".txt";
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    console.log(file);
  }
};
xhr.send();
