const express = require('express');
const { createCanvas } = require('canvas');
const base64 = require('urlsafe-base64');

const wt = require('../src/index');

const app = express();

app.get('/', async (req, res) => {
  const canvas = createCanvas(200, 200);
  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, 200, 200);

  context.fillStyle = '#000000';
  context.font = '30px Arial';
  await wt.fillTextWithTwemoji(context, 'test😉', 10, 50);

  context.fillStyle = '#888888';
  context.font = '18px Arial';
  await wt.fillTextWithTwemoji(context, '我々✨は宇宙人👽だ', 10, 100);

  if (req.query.text) {
    await wt.fillTextWithTwemoji(context, req.query.text, 10, 150);
  }

  const b64 = canvas.toDataURL().split(',');
  const image = base64.decode(b64[1]);

  res.set('Content-Type', 'image/png');
  return res.send(image);
});

app.listen('8080');
