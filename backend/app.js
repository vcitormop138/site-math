const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/course', require('./routes/course'));
app.use('/api/subscription', require('./routes/subscription'));
app.use('/api/upload', require('./routes/upload'));

app.get('/', (req, res) => res.send('Backend running!'));

module.exports = app;