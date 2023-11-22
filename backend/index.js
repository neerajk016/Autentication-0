const connection=require("./db");
const express = require("express")


const cors = require('cors')



connection();

const app=express()
const port=3001

app.use(express.json())
app.use(cors())
app.use(express.json()) 


app.get("/",(req,res)=>{
    res.send("welcome to authentication")
})





app.use("/authentication",require("./Authentication"))





app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})