import React from 'react'
import "../components/css/error.css";
import { NavLink } from 'react-router-dom';

const error = () => {
  return (
    <div className='error'>
    <div className="error-heading">
        Error 404 Not Found
    </div>
    <NavLink to="/">
        <button className="error-btn">GO BACK </button>
    </NavLink>
    </div>
  )
}

export default error