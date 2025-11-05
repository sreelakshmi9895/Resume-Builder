import React from 'react'
import { useState } from 'react';
import UserInput from '../components/UserInput';
import Preview from '../components/Preview';

function UserForm() {
   const [resumeDetails,setResumeDetails] = useState({
      username:"",
      jobTitle:"",
      location:"",
      email:"",
      mobile:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutYear:"",
      jobType:"",
      company:"",
      cLocation:"",
      duration:"",
      userSkills:[],
      summary:""
    })
  return (
    <div className='container'>
      <div className='row'>
    <div className='col-lg-6'>
      <UserInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
    </div>
     <div className='col-lg-6'>
      {
        resumeDetails.username &&
        <Preview resumeDetails={resumeDetails}/>
      }
    </div>
      </div>
    </div>
  )
}

export default UserForm
