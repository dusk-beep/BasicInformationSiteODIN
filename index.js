import https from 'https';
import http from 'http'
import fs from 'fs';

const options = {
  hostname: 'localhost',
  port: 8080,
  method: 'POST'
};

const server = http.createServer((req,res) => {
  let file;

  if(req.url==='/') {
    file = "./index.html"
  } else if (req.url === '/about') {
    file = "./about.html"
  } else if(req.url === '/contact') {
    file = "./contact.html"
  } else {
    file = "./404.html"
  }

  fs.readFile(file,'utf8',(err,data) => {
    if(err) {
      res.statusCode = 500;
      res.end('server error');

    } else {
    res.setHeader('content-Type','text/html;charset=utf-8');
    res.statusCode = 200;
    res.end(data);
    }
  })
})

server.listen(options.port,() => {
  console.log(`Server is running in localhost port {options.port}`)
})

