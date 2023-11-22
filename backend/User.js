const mongoose=require("mongoose")
const {Schema}=mongoose;
const UserSchema=new Schema({
    code:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const x=mongoose.model("user",UserSchema);
x.createIndexes();
module.exports=x;