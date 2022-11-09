import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Resumebody from './Resumebody';

const UserResumes = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async()=>{
     const res = await axios.get(`http://localhost:8000/api/resume/user/${id}`).catch((err)=>console.log(err))
     const data = await res.data;
     return data;
  }

  useEffect(()=>{
     sendRequest().then((data)=>setUser(data.user));
  },[]);
  console.log(user);
  return (
  
    <>
    <Navbar/>
    <div className="resumes">
       <h3 className="text-center">User Resumes</h3>
       <hr />
       <div className="resumeContainer">
          {user && user.resumes && user.resumes.map((resume,index)=>(
            <Resumebody id={resume._id} studentname={resume.studentname} email={resume.email} skills={resume.skills} Education={resume.Education} key={index} isUser={true}/>
          ))}
         
       </div>
    </div>
    </>
  )
}

export default UserResumes