const express = require('express');
const bodyParser = require('body-parser');
const upload = require('./upload');
const app = express();

app.use(bodyParser.json());

const fields = [
  { name: 'object', maxCount: 1 },
  { name: 'texture', maxCount: 1 }
];

app.post('/fileupload', upload.fields(fields), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
