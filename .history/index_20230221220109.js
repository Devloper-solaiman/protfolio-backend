const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
// name: air_doctors
// pass : srj6v9kL0ytWnscw
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('running to Air doctors portal')
})

app.listen(port, () => {
    console.log('listening to prot', port);
})