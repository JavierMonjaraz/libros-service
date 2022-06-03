const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')

const libros = require('./Routes/libros')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api/v1',libros)

app.listen(5000, () => {
    console.log("Servidor levantado en el puerto: 5000")
})
