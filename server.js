const express = require('express');
const app = express();
const port = 3000; // 任意のポート番号

// CORSヘッダーを設定
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // すべてのオリジンを許可（セキュリティ上の理由で本番環境では使用しないでください）
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 静的ファイルの提供（index.htmlがあるディレクトリを指定）
app.use(express.static(__dirname));

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});