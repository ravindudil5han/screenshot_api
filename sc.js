const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/screenshot', async (req, res) => {
    

  const url = req.query.url;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const screenshot = await page.screenshot({ encoding: 'base64' });
  await browser.close();

  res.send(screenshot);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
