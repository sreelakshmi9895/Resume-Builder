import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className=' d-flex justify-content-center align-items-center p-2 my-5 flex-column'>
     <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299960.gif" alt="" />
     <h1>404</h1>
     <h4>Page not Found</h4>
     <Link className='btn btn-danger' to={'/'}>Go to home</Link>
    </div>
  )
}

export default Pnf
