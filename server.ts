import * as fs from 'node:fs/promises';
import * as http from 'node:http';
import * as path from 'node:path';
import * as connect from 'connect';
import * as history from 'connect-history-api-fallback';

const app = connect();

app.use(history() as connect.HandleFunction);

app.use(async (req, res) => {
  const MIME_TYPES: { [key: string]: string } = {
    default: 'application/octet-stream',
    html: 'text/html; charset=UTF-8',
    js: 'application/javascript; charset=UTF-8',
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpg',
    gif: 'image/gif',
    ico: 'image/x-icon',
    svg: 'image/svg+xml',
  };

  if (req.method === 'GET') {
    const STATIC_PATH = path.join(__dirname, 'dist');
    const filePath = STATIC_PATH + (req.url === '/' ? '/index.html' : req.url);
    const ext = path.extname(filePath).slice(1);

    try {
      const contents = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] });
      res.end(contents);
    } catch (error) {
      res.writeHead(404);
      res.end('Not Found');
    }
  }
});

http
  .createServer(app)
  .listen(8080)
  .on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중...');
  })
  .on('error', error => {
    console.error(error);
  });
