
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from "./components/Navbar";
import Login from './components/Login'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const App = () => {
  return (<>
    
    <Router>
      <Navbar/>
    

  
    
    <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>


        <Route exact path="/about" element={<About />}/>
        
    </Routes>
    

    

    


    </Router>
    </>
  )
}

export default App