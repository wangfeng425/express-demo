const express = require("express");
const router = express.Router();
const DB = require('../db/model/userModel');

router.post('/register', (req, res) => {
  const { name, password } = req.body;
  // DB.find().then( data => {
  //   res.send({code: 10000, data: data, msg: "success"})
  // }).catch(err => {
  //   console.log(err)
  // })
  DB.findOne({name: name}).then((result, err) => {
    if (err) {
      res.send({code: 9999, msg: err})
    } else if (result) {
      res.send({code: 9999, msg: "用户名已存在"})
    } else {
      DB.create({
        name: name,
        password: password,
        _id: new Date().getTime()
      }).then((data, error) => {
        if (error) {
          res.send({code: 9999, msg: "注册失败"})
        }
        if (data) {
          res.send({code: 10000, msg: "注册成功"})
        }
      })
    }
  })
})
router.post('/login', (req, res) => {
  const { name, password } = req.body;
  DB.findOne({ name: name }).then((result, err) => {
    if (err) {
      res.send({code: 9999, data: null, msg: err})
    } else if (!result) {
      res.send({code: 9999, data: null, msg: "用户名不存在"})
    } else {
      if (password != result.password) {
        res.send({code: 9999, data: null, msg: "密码错误"})
      } else {
        res.send({code: 10000, data: {token: 666}, msg: "密码错误"})
      }
    }
  })
})
module.exports = router;
