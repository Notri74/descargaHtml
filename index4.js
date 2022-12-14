const fs = require("fs");
const request = require("request");

const req = http.request("http://example.com", (res) => {
  const data = [];

  res.on("data", (_) => data.push(_));
  res.on("end", () => {
    console.log(data.join());
    var file = new Blob([data], { type: "text/plain" });
    var fileName = "test.txt";
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  });
});

req.end();
