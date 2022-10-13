const express = require('express');

// Import our modular routers for /notes (maybe focus here for delete req)
const notesRouter = require('./notes');

const app = express();

app.use('./notes', notesRouter);

module.exports = app;