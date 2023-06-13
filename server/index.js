const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user : 'root',
    password : 'Suhasini@663',
    database: 'flashcard',
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get("/api/get", (req,res) =>{
    const sqlInsert= 
     "SELECT * FROM fctable";
     db.query(sqlInsert, (err,result) =>{
        res.send(result);
        console.log(err,result)
     });
})

app.post("/api/insert", (req,res) =>{

    const question = req.body.question
    const answer = req.body.answer
   
    const sqlInsert = "INSERT INTO fctable(question,answer) VALUES (?,?)"
    db.query(sqlInsert, [question,answer], (err,result) =>{

        console.log(result);
    })
});
    

app.listen(3001, ()=>{
    console.log("running on port 3001");
})