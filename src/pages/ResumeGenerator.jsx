import React from 'react'
import { IoDocument } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
function ResumeGenerator() {
  return (
    <div className='container-fluid'>
     <h1 className='text-center my-5'>Create a Job-Winning Resume in Minutes</h1>
     <div style={{height:'60vh'}} className='row justify-content-center align-items-center'>
      <div className='col-md-1'></div>
      <div className='col-md-4 border rounded shadow p-5 text-center'>
        <IoDocument  className='text-primary fs-1 mb-3'/>
        <h4>Add Your Information</h4>
        <p>Add pre-written examples to each section</p>
        <h5>step-1</h5>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md-4 border rounded shadow text-center p-5'>
          <FaCloudDownloadAlt className='text-primary fs-1 mb-3'/>
          <h4>Download Your Resume</h4>
          <p>Download and start applying</p>
          <h5>step-2</h5>
      </div>
      <div className='col-md-1'></div>
     </div>
     <div className='text-center mb-5'>
      <Link to={'/form'} className='btn text-white' style={{backgroundColor:'purple'}} >LET'S START
      </Link>
     </div>
    </div>
  )
}

export default ResumeGenerator
