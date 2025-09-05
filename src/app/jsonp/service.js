// server.js
const express = require('express');
const app = express();
const port = 3000;

// JSONP 接口
app.get('/getData', (req, res) => {
  const callback = req.query.callback || 'callback';
  const data = { name: 'fan yu', age: 28 };

  // 返回 JS 脚本：调用前端传入的 callback 函数
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`${callback}(${JSON.stringify(data)})`);
});

app.listen(port, () => {
  console.log(`JSONP server running at http://localhost:${port}`);
});
