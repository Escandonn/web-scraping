const puppeteer = require("puppeteer");

(async () => {
  const URL = "https://pelisplus.in/";

  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });

  // Espera a que el selector '.carousel-list li .cardname' esté presente en la página
  await page.waitForSelector('.carousel-list li .cardname');

  // Extrae el texto de los elementos h3 con la clase 'cardname'
  const titles = await page.evaluate(() => {
    const titleElements = document.querySelectorAll('.carousel-list li .cardname');
    const titles = [];
    titleElements.forEach((element) => {
      titles.push(element.innerText.trim());
    });
    return titles;
  });

  console.log("Títulos encontrados:");
  console.log(titles);

  await browser.close();
})();
