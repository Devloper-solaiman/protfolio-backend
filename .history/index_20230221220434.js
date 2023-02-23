const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


const port = process.env.PORT || 5000;
const app = express();
// name: air_doctors
// pass : srj6v9kL0ytWnscw
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://air_doctors:srj6v9kL0ytWnscw@cluster0.ed36rqm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('running to Air doctors portal')
})

app.listen(port, () => {
    console.log('listening to prot', port);
})