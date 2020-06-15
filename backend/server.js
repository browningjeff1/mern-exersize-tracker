const express = require('express'),
      cors    = require('cors'),
      mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connnection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established succesfully');
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});