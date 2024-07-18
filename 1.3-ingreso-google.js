const puppeteer = require("puppeteer");

(async () => {
  const URL = "https://accounts.google.com/v3/signin/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&ddm=0";

  const browser = await puppeteer.launch({
    headless: false  // Para ver el navegador en acción
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  // Ingresa el correo electrónico
  await page.type('input[type="email"]', "escandonalejandro16@gmail.com");

  // Espera a que aparezca el botón de siguiente
  await page.waitForSelector('div.Xb9hP input[type="submit"]');

  // Hacer clic en el botón de siguiente
  await page.click('div.Xb9hP input[type="submit"]');

  // Esperar a que la página cargue después del clic
  await page.waitForNavigation({ waitUntil: "domcontentloaded" });

  // Obtener la URL y el título de la página actual
  const currentURL = page.url();
  const currentTitle = await page.title();

  console.log("URL después del clic:", currentURL);
  console.log("Título de la página después del clic:", currentTitle);

  // await browser.close();
})();
