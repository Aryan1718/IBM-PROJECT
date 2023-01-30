const express = require('express')
const app = express()
const cors=require('cors')
const bodyParser = require('body-parser')
const db=require('./database/db.js')

app.use(express.json())
app.use(bodyParser.urlencoded({extends:true}))
app.use(cors())



app.post("/api/search",(req,res)=>{
    const u_input=req.body.usrInput
    console.log(u_input)
    console.log(typeof u_input)
    const searchQ=`SELECT * FROM maindatabase WHERE searchKeyword="${u_input}"`
    db.query(searchQ,(err,result)=>{
        // if(err) throw err
        console.log(result)
    })
    
})

app.listen(8082,(err)=>{
    if(err) throw err;
    console.log(`connected to the port number ${8082}`)
})