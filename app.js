const express = require('express');
const { response } = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3001;

const { MONGOURI } = require('./keys');

require('./models/user');

app.use(express.json());
app.use(require('./routes/auth'));

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('mongo is connected');
});

mongoose.connection.on('error', (err) => {
    console.log('error connected', err);
});

app.listen(PORT, () => {
    console.log('server is running on ', PORT);
});