
const express = require('express')
const { createConnection } = require('mysql')
const router = express.Router()
const DB = require("../database/Connection.js")
const Prevention = require("sqlstring");

router.get('/index', (req, res) => {
    res.render("index")
  })

router.get('/', (req, res) => {
    res.render("index")
  })

router.get('/teacher', (req, res) => {
    res.render("teacher")
  })

router.get('/student', (req, res) => {
    DB.query(`SELECT * FROM student`,(err,stu) =>{
        if(err){
            console.log(err)
        } else{
            res.render("student.hbs", 
            {
                stu
            });
        }
    })
  })

 
router.get('/function', (req, res) => {
  res.render("function")
}) 
  
module.exports = router
  