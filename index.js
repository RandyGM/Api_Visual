const express = require('express');

//Importar Modulo Path
const path = require('path');

const app = express();

const port = 3000;

// Creacion de Rutas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});