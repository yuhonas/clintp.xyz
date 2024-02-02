const inputFileName = process.argv[2];
const jsonFileName = process.argv[3];
const outputFileName = process.argv[4];

const fs = require("fs");
var template = JSON.parse(fs.readFileSync(jsonFileName));

const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const path = require("path");

// Load the docx file as binary content
const content = fs.readFileSync(
  path.resolve(__dirname, inputFileName),
  "binary"
);

const zip = new PizZip(content);
const expressionParser = require("docxtemplater/expressions.js");

const doc = new Docxtemplater(zip, {
  paragraphLoop: true,
  linebreaks: true,
  parser: expressionParser,
});

doc.render(template);

const buf = doc.getZip().generate({
  type: "nodebuffer",
  // compression: DEFLATE adds a compression step.
  // For a 50MB output document, expect 500ms additional CPU time
  compression: "DEFLATE",
});

// buf is a nodejs Buffer, you can either write it to a
// file or res.send it with express for example.
fs.writeFileSync(outputFileName, buf);
