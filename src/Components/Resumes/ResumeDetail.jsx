import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const ResumeDetail = () => {
  const id = useParams().id;
  console.log(id);

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})

  const handleOnChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const [resume, setResume] = useState();
  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:8000/api/resume/${id}`).catch((err) => console.log(err))

    const data = await res.data;
    return data;
  }

  

  useEffect(() => {
    fetchDetails().then(data => {
      setResume(data.resume)
      setInputs({
        email: data.resume.email,
        mobilenumber: data.resume.mobilenumber,
        worktitle: data.resume.worktitle,
        workdesc: data.resume.workdesc,
        skills: data.resume.skills
      })
    });
  }, [id])
  console.log(resume);

  //for updating the form
  const sendRequest = async () => {
    const res = await axios.put(`http://localhost:8000/api/resume/update/${id}`,{
      email:inputs.email,
      mobilenumber:inputs.mobilenumber,
      worktitle:inputs.worktitle,
      workdesc:inputs.workdesc,
      skills:inputs.skills
    }).catch((err) => console.log(err))
    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data) => console.log(data)).then(()=>navigate("/resumes"))
  }

  return (
    <>
      <Navbar />
      <div className="Resumeform">
        <h2 className="text-center my-4">Edit Your Resumes</h2>
        {inputs && <form onSubmit={handleSubmit}>
          <div className="add-resume">

            <div className="name">
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Email</label>
                  <input type="email" className="form-control" placeholder="Email" aria-label="Last name" name="email" onChange={handleOnChange} value={inputs.email} />
                </div>

                <div className="col">
                  <label htmlFor="name">Mobile Number</label>
                  <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Last name" name="mobilenumber" onChange={handleOnChange} value={inputs.mobilenumber} />
                </div>

              </div>

            </div>



            <hr />

            <div className="row">

              <div className="col">
                <label htmlFor="name">Work experience(Campony Name)</label>
                <input type="text" className="form-control" placeholder="Project Name" aria-label="Last name" name="worktitle" onChange={handleOnChange} value={inputs.worktitle} />
              </div>

            </div>
            <div className="row">
              <label htmlFor="addlabel" className="addlabel">Work description..</label>
              <textarea name="workdesc" id="address" cols="10" rows="5" className="address" placeholder="Project description...." onChange={handleOnChange} value={inputs.workdesc}></textarea>
            </div>

            <hr />

            <div className="row">
              <div className="col">
                <div className="skills">
                  <label htmlFor="name"> Skills</label>
                  <input type="text" className="form-control" placeholder=" Skills" aria-label="Last name" name="skills" onChange={handleOnChange} value={inputs.skills} />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary my-4">submit</button>
          </div>





        </form>}
      </div >
    </>
  )
}

export default ResumeDetail