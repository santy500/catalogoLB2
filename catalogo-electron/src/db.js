// db.js
const electron = require('electron');
const path = require('path');
const sqlite = require('sqlite-electron');

const app = electron.app;
const dbPath = path.join(app.getPath('userData'), 'mydatabase.db');

const db = new sqlite.Database();

db.open(dbPath)
  .then(() => {
    console.log('Base de datos abierta correctamente');
    db.run(`CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        codigo TEXT NOT NULL,
        imagen TEXT NOT NULL,
        colores TEXT NOT NULL,
        talles TEXT NOT NULL,
        marca TEXT NOT NULL
      )`);
  })
  .catch((err) => {
    console.error('Error al abrir la base de datos', err.message);
  });

module.exports = db;
