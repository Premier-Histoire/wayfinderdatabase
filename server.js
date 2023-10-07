const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルを提供
app.use(express.static(path.join(__dirname, 'dist')));

// その他のExpressルートやミドルウェアを追加することもできます

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});