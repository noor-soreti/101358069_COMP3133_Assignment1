const express = require('express')
const mongoose = require('mongoose');
const server = require('./schema/index')
const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://sa:TXEt5Ngiu7WVcU9P@cluster0.r8uhczt.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});
