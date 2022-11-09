import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Resumebody from './Resumebody'

const Resumes = () => {
  const [resumes, setResumes] = useState();
  const sendRequest =async()=>{
     const res = await axios.get("http://localhost:8000/api/resume").catch(err=>console.log(err))
     const data =await res.data;
     return data;
  };
  useEffect(()=>{
    sendRequest().then((data)=>setResumes(data.allresumes));
    
  },[]);
  console.log(resumes);
  return (
    <>
     <Navbar/>
    <div className="resumes">
       <h3 className="text-center">All Resumes</h3>
       <hr />
       <div className="resumeContainer">
        {resumes && resumes.map((resume,index)=>(
           <Resumebody studentname={resume.studentname} email={resume.email} skills={resume.skills} Education={resume.Education} user={resume.user.name}
           isUser={localStorage.getItem("userId")===resume.user._id} id={resume._id}/>
        ))}
       </div>
    </div>
    </>
  )
}

export default Resumes