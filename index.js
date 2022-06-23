const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// mongoDB atlas uri connect
mongoose.connect('mongodb+srv://user1:user1@cluster0.krv3a8p.mongodb.net/?retryWrites=true&w=majority').then(() => {
  console.log('Connect MongoDB atlas');
}).catch((e) => {
  console.log(e);
})

// middleware
app.set('view engine', 'ejs');
app.use(express.json());// 它使用body-parser解析帶有JSON有效負載的傳入請求。
app.use(express.urlencoded({ extended: true}));// 它基於body-parser解析帶有urlencoded有效負載的傳入請求


app.get('/',(req, res) => {
  // 在首頁render index.ejs page
  res.render('index');
});

app.listen(8080, () => {
  console.log('sever running on port 8080');
})