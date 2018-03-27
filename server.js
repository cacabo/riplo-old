const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const contact = require('./backend/routes/contact')();

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/', (req, res) => {
  res.send({
     success: true,
     data: 'Server is up and running!'
   });
});

app.use('/api/contact', contact);

app.listen(port, () => console.log(`Listening on port ${port}`));
