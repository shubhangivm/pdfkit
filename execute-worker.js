const generatepdf = require('./generatedoc.js');

process.on("message", (message) => {
  generatepdf(message)
    .then((res) => {
      const buffer = res.toString("base64");
      process.send(buffer);
    })
    .catch((e) => {
      console.log(e,"-e");
      process.send(null);
    });

});