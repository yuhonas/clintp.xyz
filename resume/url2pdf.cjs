const puppeteer = require("puppeteer");
const path = require("path");
const url = process.argv[2];
if (!url) {
  throw "Please provide URL as a first argument";
}
async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.pdf({
    path: process.argv[3] || `${path.basename(__filename, ".cjs")}.pdf`,
    fullPage: true,
    printBackground: true,
  });
  browser.close();
}
run();
