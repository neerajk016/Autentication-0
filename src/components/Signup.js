import React,{useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  


  const [Credentials,setCredentials]=useState({code:"",name:"",password:"",cpassword:""})

  



  const onchange=(e)=>{
    setCredentials({...Credentials,[e.target.name]:e.target.value})
  }



  const handlesubmit=async(e)=>{
    e.preventDefault();
    const {code,name,password}=Credentials;
    const response = await fetch (`http://localhost:3001/authentication/signup`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({code,name,password})
    });
    const json=await response.json();
    console.log(json)
    
      
      localStorage.setItem("token",json.authtoken)
      
      navigate('/login');
  }





  return (
    <div className='container'>

        <form className="my-3" onSubmit={handlesubmit} >

        <div className="mb-3">
          <label htmlFor="code" className="form-label">Code</label>
          <input type="text"  onChange={onchange}  required className="form-control" name="code" id="code"  />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text"  onChange={onchange}  required className="form-control" name="name" id="name" aria-describedby="nameHelp" />
        </div>


        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password"  onChange={onchange}  required className="form-control" name="password"  minLength={5} id="password"  />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password"  onChange={onchange}  required className="form-control" name="cpassword" minLength={5} id="cpassword"  />
        </div>

        
        
        <button type="submit"  className="btn btn-primary" >Submit</button>
      
      
      </form>
      
    </div>
  )
}

export default Signup