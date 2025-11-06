import React, { useEffect } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { useState } from 'react';
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit';
import { IoMdRefresh } from "react-icons/io";
import { FaBackwardFast } from "react-icons/fa6";


function ViewResume() {
const {id} = useParams()
console.log(id);
const [resume,setResume] = useState({})


useEffect(()=>{
  getResumeDetails()
},[])
 const getResumeDetails = async ()=>{
  const result = await getResumeAPI(id)
  console.log(result);
  if(result.status==200){
    setResume(result.data)
  }
 }

  return (
    <>
     <div className='container my-5'>
     <div className='row'>
   <div className="col-md-2"></div>
   <div className="col-md-8 col-12">
    <div className='d-flex justify-content-center align-items center mt-5'>
    <button className='btn fs-4 text-primary' ><FaFileDownload /></button>
    <Edit resumeDetails={resume} setResumeDetails={setResume} />
   <Link to={'/history'} className='btn fs-4 text-primary'><IoMdRefresh /></Link>
   <Link to={'/resume'} className='btn fs-4 text-primary'><FaBackwardFast /></Link>
    </div>
    <Preview resumeDetails={resume}/>
    </div>
   <div className="col-md-2"></div>
     </div>
     </div>
     
    </>
  )
}

export default ViewResume
