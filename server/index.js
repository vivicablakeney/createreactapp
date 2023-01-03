import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ilove0TTers',
  database: 'EcomProducts'
   
})

app.get("/", (_req,res)=>{
    res.json("hello")
})


app.get("/products", (_req, res)=> {
    const q = "SELECT * FROM products"
    db.query(q,(err, data)=> {
        if (err) console.log(err)
        res.send(data)
    })
})

app.listen(3000, ()=>{
    console.log("Connected to backend!")
})

