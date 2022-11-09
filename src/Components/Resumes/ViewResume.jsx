import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Resumecss/ViewResume.css";

const ViewResume = () => {

  const id = useParams().id;
  console.log(id);

  const [resume, setResume] = useState({});
  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:8000/api/resume/${id}`).catch(err => console.log(err))

    const data = await res.data;
    return data;
  }

  useEffect(() => {
    fetchDetails().then((data) => setResume(data.resume));
  }, [])

  console.log(resume);

  
  return (
    <>

      <div className="Resume-container">

        <div className="resume-body">

          <h4 className="text-center">CURRICULUM VITAE</h4>

          <div className="resumeHeader">
            <div className="studentNameField">
              <span><b>Name:</b> {resume.studentname}</span>
              <span><b>Email:</b> {resume.email}</span>
              <span><b>Mobile number: </b>{resume.mobilenumber}</span>

            </div>
            <div className="studentaddfield">
              <span><b>Address:</b> {resume.address}</span>
            </div>


          </div>

          <hr />

          <div className="resumeMain">
            <div className="education">
              <h6 className="attribute"><b>Education:</b></h6>
              <span><b>Highest Degree: </b>{resume.Education}</span>
              <span><b>College: </b>{resume.graduationcollege}</span>
              <span><b>Percentage: </b>{resume.graduationPercentage}</span>
            </div>

            <div className="work">
              <h6 className="attribute"><b>Work Experience:</b></h6>
              <span className="worktitle"><b>Campony Name: </b>{resume.worktitle}</span>
              <span className="workdesc"><b>Responsibilties: </b>{resume.workdesc} </span>
            </div>

            <div className="project">
              <h6 className="attribute"><b>Project Work: </b></h6>
              <span className="protitle"><b>Project Name:</b> {resume.projectname}</span>
              <span className="prodesc">{resume.projectdesc} </span>
            </div>

            <div className="skills">
              <h6 className="attribute"><b>Skills:</b></h6>
              <span>{resume.skills}</span>
            </div>

            <div className="certifications">
              <h6 className="attribute"><b>certifications:</b></h6>
              <span>{resume.certifications}</span>
            </div>

            <div className="academicDetails">
              <h6 className="attribute"><b>Academic Crdentials:</b></h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Education</th>
                    <th scope="col">College</th>
                    <th scope="col">Year of passing</th>
                    <th scope="col">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{resume.Education}</th>
                    <td>{resume.graduationcollege}</td>
                    <td>{resume.graduationpassingDate}</td>
                    <td>{resume.graduationPercentage}</td>
                  </tr>
                  <tr>
                    <th scope="row">HSC</th>
                    <td>{resume.hsccollege}</td>
                    <td>{resume.hscpassingDate}</td>
                    <td>{resume.hscPercentage}</td>
                  </tr>
                  <tr>
                    <th scope="row">SSC</th>
                    <td>{resume.sscschool}</td>
                    <td>{resume.sscpassingDate}</td>
                    <td>{resume.sscPercentage}</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <h6 className="attribute"><b>personal profile:</b></h6>
            <div className="personal">
              <span><b>Name of Student: </b>{resume.studentname}</span>
              <span><b>Gender: </b>{resume.gender}</span>
              <span><b>Project Name: </b>{resume.projectname}</span>
              <span><b>Linkdin profile: </b>{resume.linkdin}</span>
              <span><b>Facebook Profile: </b>{resume.facebook}</span>
              <span><b>Father Name: </b>{resume.fathername}</span>
              <span><b>Address of Correspondence: </b>{resume.address}</span>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default ViewResume