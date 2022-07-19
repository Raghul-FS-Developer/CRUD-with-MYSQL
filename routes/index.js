var express = require('express');
var router = express.Router();
const mysql = require("mysql2")
require("dotenv").config()

const password = process.env.PASSWORD
const Host = process.env.HOST
const User = process.env.USER
const database = process.env.DB
const db = mysql.createPool({
  host:Host,
  user:User,
  password:password,
  database:database
})
router.get('/get',async(req,res)=>{
  const sqlGet = "SELECT * FROM contact_db"
  
  db.query(sqlGet,(error,result)=>{
 console.log(error)
    res.send(result)
  })
});


router.post('/post',async(req,res)=>{

  const {name,email,mobile,degree,dept}= req.body
  const sqlInsert ="INSERT INTO contact_db (name,email,mobile,degree,dept) VALUES (?,?,?,?,?)"
 db.query(sqlInsert,[name,email,mobile,degree,dept],(error,result)=>{
   console.log(error)

   if(result.affectedRows >= 1){
     res.status(200).json("successfully posted")
    }else{
      res.status(400).json("failed to post")
    }
  })
})
router.delete('/delete/:id',async(req,res)=>{

  const {id}= req.params
  const sqlRemove ="DELETE FROM contact_db WHERE id = ?"
 db.query(sqlRemove,id,(error,result)=>{
   console.log(error)
   if(result.affectedRows >= 1){
     res.status(200).json("successfully deleted")
    }else{
      res.status(400).json("deletion failed")
    }
  })
    
})

router.get('/get/:id',async(req,res)=>{
  const {id} = req.params;
  const sqlGet = "SELECT * FROM contact_db WHERE id = ?"
  
  db.query(sqlGet,id,(error,result)=>{
 console.log(error)
    res.send(result)
  })
})

router.put('/edit/:id',async(req,res)=>{
  const {id} = req.params;
  const {name,email,mobile,degree,dept} = req.body
  const sqlGet = "UPDATE contact_db SET name = ?,email = ?,mobile = ?,degree = ?,dept = ? WHERE id = ?"
  
  db.query(sqlGet,[name,email,mobile,degree,dept,id],(error,result)=>{
 console.log(error)
 if(result.affectedRows >= 1){
  res.status(200).json("successfully updated")
 }else{
   res.status(400).json("updation failed")
 }
  })
})

router.get('/',(req, res)=> {
   res.send("hello guys")
});


module.exports = router;
