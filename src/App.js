import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Route,Routes } from 'react-router-dom'
import AddResume from './Components/Resumes/AddResume'
import ResumeDetail from './Components/Resumes/ResumeDetail'
import Resumes from './Components/Resumes/Resumes'
import UserResumes from './Components/Resumes/UserResumes'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import About from './pages/About'
import ViewResume from './Components/Resumes/ViewResume'
import { authActions } from './Store/Index'




const App = () => {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  },[dispatch])
  return (
     <>
      
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/auth" element={<Auth/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/resumes" element={<Resumes/>}/>
               <Route path="/addresumes/add" element={<AddResume/>}/>
               <Route path="/myResumes" element={<UserResumes/>}/>
               <Route path="/myResumes/:id" element={<ResumeDetail/>}/>
               <Route path="/viewresume/:id" element={<ViewResume/>}/>
               
             
           </Routes>
          
     </>
  )
}

export default App