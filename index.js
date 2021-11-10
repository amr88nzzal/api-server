'use strict';
const server = require('./src/server');
require('dotenv').config();
const { db } = require('./src/models/index')
const PORT = process.env.PORT || 3001
db.sync().then(() => {
    server.start(PORT);
}).catch(console.error)