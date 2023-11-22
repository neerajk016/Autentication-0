const User =require("./User");

const express = require("express")

const router=express.Router();

const { body, validationResult } = require('express-validator');

const bcrypt=require("bcryptjs");

const jwt= require("jsonwebtoken");

const fetchuser=require("./Fetchuser");


const JWT_SECRETKEY="all my friends are toxic";








router.post("/signup",[

    body("code","enter valid code").isLength({min:6}),
    body("name","enter valid code").isLength({min:6}),
    body("password","enter password more than 5 charecters").isLength({min:5})

],async(req,res)=>{

    


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 

    try{

        let user=await User.findOne({name:req.body.name})
        if(user){
            return res.status(400).json({errors:"a user with this name already exists"});
        }

        const salt= await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(req.body.password,salt);


        user=await User.create({
            code:req.body.code,
            name:req.body.name,
            password:secpass
        })
        

        const data={
            user:{
                id:user.id
            }
        }

        const authtoken=jwt.sign(data,JWT_SECRETKEY)


        res.json({authtoken})





    }catch(error){
        console.log(error.message);
        res.status(500).send("some error occured")

    }
})













    
router.post("/login",[
    body("name","enter valid name").isLength({min:3}),
    body('password','password cannot be blank').exists()
],async(req,res)=>{

    let sucess=false
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    
    const{name,password}=req.body;

    try{

        let user=await User.findOne({name});
        if(!user){
            sucess=false
            return res.status(400).json({ errors: "please try to login with correct credentials"});

        }

        const passwordcompare=await bcrypt.compare(password,user.password)
        if(!passwordcompare){
            sucess=false
            return res.status(400).json({ errors: "please try to login with correct credentials"});
        }


        const data={
            user:{
                id:user.id
            }
        }

        const authtoken=jwt.sign(data,JWT_SECRETKEY)
        sucess=true
        
        res.json({sucess,authtoken})




    }catch(error){
        console.log(error.message);
        res.status(500).send("some error occured")

    }

})














router.post("/getuser",fetchuser,async(req,res)=>{
    try{

        userid=req.user.id;
        const user= await User.findById(userid).select("-password")
        res.send(user)

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})



    










    
    


module.exports=router

