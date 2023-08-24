let express = require('express');
let app = express();

const {SERVER_PORT} = require('./config')
let objectStorageRoute = require('./routes/s3Route');
app.use('/s3Object', objectStorageRoute);

app.listen(SERVER_PORT, function () {
  console.log("Server is running on port:" + SERVER_PORT);
});

module.exports = app;