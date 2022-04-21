const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require('./db/connect')
const userRouter = require('./router/userRouter')

app.all('*', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'X-Requexted-with, accept, origin, content-type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next()
})
app.use("/", express.static(path.resolve(__dirname, './page'), {
  extensions: ['html'], //缺失后缀时，将设置值的第一个作为后缀
}));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/', userRouter);
app.listen(4000, () => {
  console.log("server up");
})