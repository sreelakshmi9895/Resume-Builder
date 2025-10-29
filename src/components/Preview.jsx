import { Divider,Button  } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{margin:'70px'}} className='p-5 w-100 shadow rounded text-center'>
      <h2>Name</h2>
      <h5>Job Title</h5>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E Mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-3'>
        <a href="" target='_blank'>GITHUB</a> |  
        <a href="" target='_blank'>LINKEDIN</a> |
        <a href="" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam in, iure nemo totam porro voluptate voluptates corporis corrupti sequi eligendi repellendus ad odit? Consectetur asperiores a exercitationem cum, illum consequuntur.</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
       <h5 className='mt-2'>Course name</h5>
      <p><span className='mx-2'>college</span>|<span className='mx-2'>University</span>|<span className='mx-2'>passout year</span></p>
       <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
       <h5 className='mt-2'>Job / Internship</h5>
      <p><span className='mx-2'>company name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
       <div className='d-flex flex-wrap  my-3'>
       <Button variant="contained" className='m-1'>NODE JS</Button>
       </div>
    </div>
  )
}

export default Preview
