const express = require('express');
const path = require('path');

const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist')));

// verify for loader.io test
// app.get('loader.io txt', (req, res) => {
//   res.send('content');
// })
app.listen(port, () => console.log('Listening on 3001'));
