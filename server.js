const PORT = 9000
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
  console.log( `server started at http://localhost:${ PORT }` );
});