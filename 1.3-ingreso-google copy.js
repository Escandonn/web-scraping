const puppeteer = require("puppeteer");

(async () => {
  const URL = "https://accounts.google.com/v3/signin/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&ddm=0";
  const executablePath = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'; // Ruta al ejecutable de Brave en Windows

  const browser = await puppeteer.launch({
    headless: false,  // Para ver el navegador en acción
    executablePath: executablePath // Usar Brave en lugar de Chromium
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  // Ingresa el correo electrónico
  await page.type('input[type="email"]', "escandonalejandro16@gmail.com");

  // Espera a que el botón de siguiente esté disponible
  await page.waitForSelector('.VfPpkd-dgl2Hf-ppHlrf-sM5MNb .VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b');

  // Hacer clic en el botón de siguiente
  await page.click('.VfPpkd-dgl2Hf-ppHlrf-sM5MNb .VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b');

  // Esperar a que la página cargue después del clic
  await page.waitForNavigation({ waitUntil: "domcontentloaded" });

  // Obtener la URL y el título de la página actual
  const currentURL = page.url();
  const currentTitle = await page.title();

  console.log("URL después del clic:", currentURL);
  console.log("Título de la página después del clic:", currentTitle);

  // Verificar el estado HTTP de la página actual
  const response = await page.waitForResponse(response => response.status() === 200);
  console.log(`Estado HTTP de la página: ${response.status()}`);

  // Mantener el navegador abierto
  await new Promise(resolve => setTimeout(resolve, 30000)); // Mantener abierto por 30 segundos

  await browser.close();
})();
