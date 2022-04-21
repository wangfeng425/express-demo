const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/shop',{
    useCreateIndex:true,
    useNewUrlParser:true
})
const db = mongoose.connection;
db.on('error', () => {
  console.log("数据库连接失败")
});
db.on('open', () => {
  console.log('数据库连接成功');
})