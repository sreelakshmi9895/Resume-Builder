import { Divider,Button  } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div style={{margin:'70px'}} className='p-5 w-100 shadow rounded text-center'>
      <h2>{resumeDetails?.username}</h2>
      <h5>{resumeDetails?.JobTitle}</h5>
      <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mobile}</span></h6>
      <p className='my-3'>
        <a href="{resumeDetails?.github}" target='_blank'>GITHUB</a> |  
        <a href="{resumeDetails?.linkedin}" target='_blank'>LINKEDIN</a> |
        <a href="{resumeDetails?.portfolio}" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}} >{resumeDetails?.summary}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam in, iure nemo totam porro voluptate voluptates corporis corrupti sequi eligendi repellendus ad odit? Consectetur asperiores a exercitationem cum, illum consequuntur.</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>{resumeDetails?.education}</Divider>
       <h5 className='mt-2'>{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'>{resumeDetails?.passoutYear}</span></p>
       <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>{resumeDetails?.jobType}</Divider>
       <h5 className='mt-2'>Job / Internship</h5>
      <p><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.cLocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
       <div className='d-flex flex-wrap  my-3'>
       {
        resumeDetails?.userSkills?.map((item,index)=>(
          <Button variant="contained" className='m-1'>{item}</Button>
        ))
       }
       </div>
    </div>
  )
}

export default Preview
