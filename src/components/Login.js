import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const navigate = useNavigate();


    const [Credentials,setCredentials]=useState({name:"",password:""})

    
    const onchange=(e)=>{
        setCredentials({...Credentials,[e.target.name]:e.target.value})
    }


    

    const handlesubmit=async(e)=>{
        e.preventDefault();
    
        const response = await fetch (`http://localhost:3001/authentication/login`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:Credentials.name,password:Credentials.password})
        });
        const json=await response.json();
        console.log(json)


        if(json.sucess){
          //save the auth-token and redirect
          localStorage.setItem("token",json.authtoken)
          localStorage.setItem("check",true)
          navigate('/');
    
        }else{
          alert("Invalid Credentials1");
        }
    }



    return (
        <div className='container'>
    
            <form className="my-3" onSubmit={handlesubmit} >
    
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" value={Credentials.name} onChange={onchange}  required className="form-control" name="name" id="name"  />
            </div>
    
    
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={Credentials.password} onChange={onchange}  required className="form-control" name="password" id="password" />
            </div>
    
            
            
            <button type="submit"  className="btn btn-primary" >Submit</button>
          
          
          </form>
          
        </div>
      )




  
}

export default Login