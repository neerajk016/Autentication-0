const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/authentication";

const connection=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo sucessfully")
    })
}

module.exports=connection;