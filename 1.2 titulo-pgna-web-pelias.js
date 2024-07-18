const puppeteer = require("puppeteer");

(async () => {
  const URL = "https://pelisplus.in/";

  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });

  const title = await page.title();
  console.log(`Titulo de la pagina: ${title}`);

  await browser.close();
})();
