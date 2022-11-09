import React from 'react'
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../Store/Index';

const Navbar = () => {
    const isLoggedIn = useSelector(state=>state.isLoggedIn)

    const dispatch = useDispatch();
    return (
      
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            {isLoggedIn && 
                            <> <li className="nav-item">
                                <NavLink to="/addresumes/add" className="nav-link">Add Resume</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink to="/resumes" className="nav-link">All Resumes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/myResumes">My Resumes</NavLink>
                            </li>
                            </>}
                            
                        </ul>
                        {!isLoggedIn &&
                            <Link to="/auth" className="btn btn-dark mx-2">Login</Link>}
                        {isLoggedIn &&
                            <Link onClick={()=>dispatch(authActions.logout())} to="/" className="btn btn-outline-light mx-2">Logout</Link>}
                         
                        
                    </div>
                </div>
            </nav>
        </div>
       
    )
}

export default Navbar