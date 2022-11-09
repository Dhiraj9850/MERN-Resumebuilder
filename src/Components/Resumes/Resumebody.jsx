import React from 'react'
import "./Resumecss/Resumebody.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Resumebody = ({ studentname, email, Education, skills, user ,isUser,id}) => {
    console.log(studentname,isUser);

    const navigate = useNavigate();
   
    const handleEdit=(e)=>{
       navigate(`/myResumes/${id}`)
    }

    const handleView =(e)=>{
        console.log("can view");
        navigate(`/viewresume/${id}`)
    }
    
    const deleteRequest =async()=>{
       const res = await axios.delete(`http://localhost:8000/api/resume/${id}`).catch((err)=>console.log(err))
       const data = await res.data;
       return data;
    }

    const handleOnDelete =(e)=>{
       deleteRequest().then((data)=>console.log(data))
    }


    return (
        <div className="resume-card">
            <div className="card my-2">
                <div className="card-body resume-content">
                    <h5 className="card-title">Name of student : {studentname}</h5>
                    <h6 className="card-title">Email : {email}</h6>
                    <h6 className="card-title">Highest Education : {Education}</h6>
                    <h6 className="card-title">Skills : {skills}</h6>
                    <h6 className="card-title">Name of user : {user}</h6>


                </div>
                <div className="btn">
                  
                   <button className="btn btn-sm btn-dark" onClick={handleView}><i className="bi bi-eye p-1"></i></button>
                   {isUser && 
                   <>
                   <button className="btn btn-sm btn-success my-2" onClick={handleEdit}><i className="bi bi-pen p-1"></i></button>
                   <button className="btn btn-sm btn-outline-danger my-2" onClick={handleOnDelete}><i className="bi bi-trash p-1"></i></button>
                   
                   </>}
                </div>
            </div>

        </div>
    )
}

export default Resumebody