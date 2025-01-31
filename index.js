const express = require('express');
const mongoose = require('mongoose')
const { resolve } = require('path');
require('dotenv').config()

const app = express();
const port = 3010;

app.use(express.static('static'));

const connectDB = async() =>{
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to database');

  }catch(err){
    console.error(`Error connecting to database: ${err.message}`);
  }
}
connectDB();
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
