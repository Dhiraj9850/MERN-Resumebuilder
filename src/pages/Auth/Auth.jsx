import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { authActions } from '../../Store/Index';
import "./Auth.css";

const Auth = () => {
   const [inputs, setInputs] = useState({
      name: "",
      email: "",
      password: ""
   })
   const [signup, setSignup] = useState(false);
   //To update the state of actions
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleOnChange = (e) => {
      setInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }))
   }


   const sendRequest = async (type = "login") => {
      const res = await axios.post(`http://localhost:8000/api/users/${type}`, {
         name: inputs.name,
         email: inputs.email,
         password: inputs.password
      }).catch(err => console.log(err))

      const data = await res.data;
      console.log(data);
      return data;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      if (signup) {
         sendRequest("signup").then((data)=>localStorage.setItem("userId",data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate("/resumes")).then(data => console.log(data))
      }
      else {
         sendRequest().then((data)=>localStorage.setItem("userId",data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate("/resumes")).then(data => console.log(data))
      }
   }

   return (
      <>
        <Navbar/>
         <div className="Login">
            <h3>{signup ? "Create Your Account" : "Get started-Login"}</h3>
            <div className="logincontainer">
               <form onSubmit={handleSubmit}>

                  {signup && <div className="name">
                     <label htmlFor="name">Enter Full name</label>
                     <input onChange={handleOnChange} value={inputs.name} type="text" name="name" id="name" />
                  </div>}
                  <div className="email">
                     <label htmlFor="email">Email</label>
                     <input onChange={handleOnChange} value={inputs.email} type="email" name="email" id="email" />
                  </div>
                  <div className="password">
                     <label htmlFor="password">Password</label>
                     <input onChange={handleOnChange} value={inputs.password} type="text" name="password" id="password" />
                  </div>

                  <div className="btn-grp">
                     {!signup && <button type="submit" className="btn btn-success" id="loginbtn">Login</button>}
                     {signup && <button type="submit" className="btn btn-success" id="loginbtn">Signup</button>}
                     <button type="submit" onClick={() => setSignup(!signup)} className="create">{signup ? "back to login" : "create account"}</button>
                  </div>
               </form>
            </div>
         </div>
      </>

   )
}

export default Auth