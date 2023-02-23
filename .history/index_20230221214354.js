const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();




app.listen(port, () => {
    console.log('listening to prot', port);
})