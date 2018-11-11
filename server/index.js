const express = require('express');
const pgp = require("pg-promise")();
const bodyParser = require('body-parser');
const upload = require('./upload');
const app = express();
const db = pgp("postgres://postgres:postgres@localhost:5432/viewer");

app.use(bodyParser.json());

const fields = [
  { name: 'object', maxCount: 1 },
  { name: 'texture', maxCount: 1 }
];

db.one("SELECT NOW()")
  .then(function (data) {
    console.log("DATA:", data);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });

app.post('/fileupload', upload.fields(fields), (req, res) => {
  db.query(`INSERT INTO objects (name, object_url)
    VALUES ($1, $2);`, [req.body.name, req.files.object[0].filename])
    .then(function () {
      console.log("Success:");
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });

  res.redirect('http://localhost:3001/');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
