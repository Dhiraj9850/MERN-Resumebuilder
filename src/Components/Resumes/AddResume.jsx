import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Resumecss/AddResume.css";

const AddResume = () => {
  const [inputs, setInputs] = useState({
    "studentname": "",
    "gender": "",
    "email": "",
    "mobilenumber": "",
    "address": "",
    "projectname": "",
    "projectdesc": "",
    "Education": "",
    "graduationstartyear": "",
    "graduationendyear": "",
    "worktitle": "",
    "workdesc": "",
    "skills": "",
    "certifications": "",
    "linkdin": "",
    "facebook": "",
    "fathername": "",
    "sscschool": "",
    "hsccollege": "",
    "graduationcollege": "",
    "sscpassingDate": "",
    "hscpassingDate": "",
    "graduationpassingDate": "",
    "sscPercentage": "",
    "hscPercentage": "",
    "graduationPercentage": "",
    "user":""
  })

  const handleOnChange =(e)=>{
     setInputs((prevState)=>({
         ...prevState,
         [e.target.name] : e.target.value,
     }))
  }

  const navigate = useNavigate();
  

  const sendRequest =async()=>{
     const res = await axios.post("http://localhost:8000/api/resume/add",{
      studentname: inputs.studentname,
      gender: inputs.gender,
      email: inputs.email,
      mobilenumber: inputs.mobilenumber,
      address: inputs.address,
      projectname: inputs.projectname,
      projectdesc: inputs.projectdesc,
      Education: inputs.Education,
      graduationstartyear:inputs.graduationstartyear,
      graduationendyear:inputs.graduationendyear ,
      worktitle:inputs.worktitle ,
      workdesc:inputs.workdesc ,
      skills:inputs.skills ,
      certifications:inputs.certifications ,
      linkdin:inputs.linkdin ,
      facebook:inputs.facebook ,
      fathername:inputs.facebook,
      sscschool:inputs.sscschool ,
      hsccollege:inputs.hsccollege ,
      graduationcollege:inputs.graduationcollege ,
      sscpassingDate:inputs.sscpassingDate ,
      hscpassingDate:inputs.hscpassingDate ,
      graduationpassingDate:inputs.graduationpassingDate ,
      sscPercentage:inputs.sscPercentage ,
      hscPercentage:inputs.hscPercentage ,
      graduationPercentage:inputs.graduationPercentage ,
      user:localStorage.getItem("userId")
     }).catch((err)=>console.log(err))

     const data = await res.data;
     return data;

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data)=>console.log(data)).then(()=>navigate("/resumes"))
 }
  

  return (
    <>
      <Navbar />
      <div className="Resumeform">
        <h2 className="text-center my-4">Add Your Resumes</h2>
        <form onSubmit={handleSubmit}>
          <div className="add-resume">
            <div className="name">
              <div className="row">

                <div className="col">
                  <label htmlFor="name">Name of Student</label>
                  <input type="text" className="form-control" placeholder="Enter Full name..." aria-label="First name" name="studentname" onChange={handleOnChange} value={inputs.studentname} />
                </div>

                <div className="col">
                  <label htmlFor="name">Email</label>
                  <input type="email" className="form-control" placeholder="Email" aria-label="Last name" name="email" onChange={handleOnChange} value={inputs.email} />
                </div>

                <div className="col">
                  <label htmlFor="name">Mobile Number</label>
                  <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Last name" name="mobilenumber" onChange={handleOnChange} value={inputs.mobilenumber} />
                </div>
                <div className="col">
                  <label htmlFor="gender">Gender</label>
                  <input type="text" className="form-control" placeholder="gender" aria-label="Last name" name="gender" onChange={handleOnChange} value={inputs.gender}/>
                </div>
              </div>

            </div>

            <div className="row">
              <label htmlFor="address" className="addlabel">Permenent address</label>
              <textarea name="address" id="address" cols="10" rows="5" className="address" placeholder="Enter address here...." onChange={handleOnChange} value={inputs.address}></textarea>
            </div>

            <hr />

            <div className="row">

              <div className="col">
                <label htmlFor="name">Name of Project</label>
                <input type="text" className="form-control" placeholder="Project Name" aria-label="Last name" name="projectname" onChange={handleOnChange} value={inputs.projectname} />
              </div>

            </div>

            <div className="row">
              <label htmlFor="addlabel" className="addlabel">Tell About Your Project..</label>
              <textarea name="projectdesc" id="address" cols="10" rows="5" className="address" placeholder="Project description...." onChange={handleOnChange} value={inputs.projectdesc}></textarea>
            </div>

            <hr />
            <div className="row">

              <div className="col">
                <label htmlFor="name">Work experience(Campony Name)</label>
                <input type="text" className="form-control" placeholder="Project Name" aria-label="Last name" name="worktitle" onChange={handleOnChange} value={inputs.worktitle}/>
              </div>

            </div>
            <div className="row">
              <label htmlFor="addlabel" className="addlabel">Work description..</label>
              <textarea name="workdesc" id="address" cols="10" rows="5" className="address" placeholder="Project description...." onChange={handleOnChange} value={inputs.workdesc}></textarea>
            </div>
            
            <hr />
            <div className="row">
              <div className="col">
                <label htmlFor="name">Highest Education</label>
                <input type="text" className="form-control" placeholder="Highest education" aria-label="Last name" name="Education" onChange={handleOnChange} value={inputs.Education}/>
              </div>
              <div className="col">
                <label htmlFor="name">Start year</label>
                <input type="text" className="form-control" placeholder="start year" aria-label="Last name" name="graduationstartyear" onChange={handleOnChange} value={inputs.graduationstartyear}/>
              </div>
              <div className="col">
                <label htmlFor="name">End year</label>
                <input type="text" className="form-control" placeholder="End Year" aria-label="Last name" name="graduationendyear" onChange={handleOnChange} value={inputs.graduationendyear}/>
              </div>
              <div className="col">
                <label htmlFor="name">College Name</label>
                <input type="text" className="form-control" placeholder="College Name" aria-label="Last name" name="graduationcollege" onChange={handleOnChange} value={inputs.graduationcollege}/>
              </div>
              <div className="col">
                <label htmlFor="name">Percentage</label>
                <input type="text" className="form-control" placeholder="graduation Percentage" aria-label="Last name" name="graduationPercentage" onChange={handleOnChange} value={inputs.graduationPercentage}/>
              </div>

            </div>
            <hr />

            <div className="row">


              <div className="col">
                <label htmlFor="name">HSC Passing year</label>
                <input type="text" className="form-control" placeholder="passing year" aria-label="Last name" name="hscpassingDate" onChange={handleOnChange} value={inputs.hscpassingDate}/>
              </div>
              <div className="col">
                <label htmlFor="name">College Name</label>
                <input type="text" className="form-control" placeholder="College Name" aria-label="Last name" name="hsccollege" onChange={handleOnChange} value={inputs.hsccollege}/>
              </div>
              <div className="col">
                <label htmlFor="name"> HSC Percentage</label>
                <input type="text" className="form-control" placeholder=" HSC Percentage" aria-label="Last name" name="hscPercentage" onChange={handleOnChange} value={inputs.hscPercentage}/>
              </div>
            </div>

            <hr />

            <div className="row">


              <div className="col">
                <label htmlFor="name">SSC Passing Year</label>
                <input type="text" className="form-control" placeholder="pasasing year" aria-label="Last name" name="sscpassingDate" onChange={handleOnChange} value={inputs.sscpassingDate}/>
              </div>
              <div className="col">
                <label htmlFor="name">School Name</label>
                <input type="text" className="form-control" placeholder="School Name" aria-label="Last name" name="sscschool" onChange={handleOnChange} value={inputs.sscschool}/>
              </div>
              <div className="col">
                <label htmlFor="name"> SSC Percentage</label>
                <input type="text" className="form-control" placeholder=" SSC Percentage" aria-label="Last name" name="sscPercentage" onChange={handleOnChange} value={inputs.sscPercentage}/>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col">
                <div className="skills">
                  <label htmlFor="name"> Skills</label>
                  <input type="text" className="form-control" placeholder=" Skills" aria-label="Last name" name="skills" onChange={handleOnChange} value={inputs.skills}/>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col">
                <label htmlFor="name">Name of father</label>
                <input type="text" className="form-control" placeholder="Enter Father name..." aria-label="First name" name="fathername" onChange={handleOnChange} value={inputs.fathername}/>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col">
                <label htmlFor="name">Linkdin profile Link</label>
                <input type="text" className="form-control" placeholder="linkdin link" aria-label="First name" name="linkdin" onChange={handleOnChange} value={inputs.linkdin}/>
              </div>

              <div className="col">
                <label htmlFor="name">Facebook profile Link (optional)</label>
                <input type="text" className="form-control" placeholder="facebook link" aria-label="First name" name="facebook" onChange={handleOnChange} value={inputs.facebook}/>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col">
                <label htmlFor="name">Add Cerifications(optional)</label>
                <input type="text" className="form-control" placeholder="add your cerifications of courses and internships" aria-label="First name" name="certifications" onChange={handleOnChange} value={inputs.certifications}/>
              </div>
            </div>

            <button type="submit" className="btn btn-primary my-4">submit</button>
          </div>


        </form>
      </div >
    </>
  )
}

export default AddResume