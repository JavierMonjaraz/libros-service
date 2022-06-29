const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')

const libros = require('./Routes/libros')

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api/v1',libros)

app.listen(3000, () => {
    console.log("Servidor levantado en el puerto: 3000")
})
