const express = require('express');
const config = require('./config');
// const mainRouter = require('./routes/main.route');

const app = express();
const PORT = process.envPORT ?? 3000;

config(app);

// app.use('/', mainRouter);

app.listen(PORT, () => console.log(`*** Server started at ${PORT} port ***`));
