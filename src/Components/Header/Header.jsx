import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const isLoggedIn = useSelector(state=>state.isLoggedIn)
  return (
    <div className="header">
         <div className="headercontent">
            <h2 className="main-text">Create Your Resumes for <span>Free</span> Now.....!!</h2>
            <div className="desc">
               <span className="main-para">Get Highlighted your Resume in Top companies!</span>
               {!isLoggedIn && <Link  to="/auth" className="btn btn-dark" id="startbtn">Get Started</Link>}
            </div>
        </div>
    </div>
  )
}

export default Header