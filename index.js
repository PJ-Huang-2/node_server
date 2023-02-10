// index.js
// Include http module from Node.js 載入 HTTP 連線的模組
const { log } = require("console");
const http = require("http");

// Define server related variables 定義和伺服器有關的變數
const hostname = "localhost"; // 主機名稱
const port = 3000; // 與主機連線的連接埠號

// handle request and response here 建立伺服器
const server = http.createServer((req, res) => {
  // req 請求 , res 回應-> 1. 回應的 HTTP 狀態碼 2. 回應的內容類型
  res.statusCode = 200; // 200表示請求成功
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>Create your own server with Node.js</h1>
<h3>Popular movies in 2018</h3>
<ul>
  <li>
    <img
      src="https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg"
      alt="Jurassic World: Fallen Kingdom"
      width="50px"
    />
    Jurassic World: Fallen Kingdom
  </li>
  <li>
    <img
      src="https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg"
      alt="Ant-Man and the Wasp"
      width="50px"
    />
    Ant-Man and the Wasp
  </li>
  <li>
    <img
      src="https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
      alt="Thor: Ragnarok"
      width="50px"
    />
    Thor: Ragnarok
  </li>
  <li>
    <img
      src="https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
      alt="Avengers: Infinity War"
      width="50px"
    />
    Avengers: Infinity War
  </li>
  <li>
    <img
      src="https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg"
      alt="Mission: Impossible - Fallout"
      width="50px"
    />
    Mission: Impossible - Fallout
  </li>
</ul>`);
});

// Start and listen the server 啟動並監聽伺服器
server.listen(port, hostname, () => {
  console.log(`The Server is listening on http://${hostname}:${port}`);
});
