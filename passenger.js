#!/usr/bin/env node

const http = require('http');
const { parse } = require('url');
const path = require('path');
const fs = require('fs');

// Check if .next folder exists
const nextDir = path.join(__dirname, '.next');
if (!fs.existsSync(nextDir)) {
  console.error('Error: .next directory not found. Please run "npm run build" first.');
  process.exit(1);
}

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    http.createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, '0.0.0.0', (err) => {
      if (err) throw err;
      console.log(`> Server running on port ${port}`);
      console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
