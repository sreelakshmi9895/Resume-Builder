import React from 'react'
import { BiAlignJustify } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <>
      {/*Landing part*/}
      <section style={{width:"100%",height:"100vh",backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:"fixed",backgroundPosition:"top",backgroundSize:"cover"}} className='container-fluid row align-items-center'>
      <div className='row'>
     <div className="col-md-4"></div>
     <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
      <h2>Designed to get hired</h2>
      <h3>Your skills , your story , your next job-all in one </h3>
      <Link to = {'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
     </div>
     <div className="col-md-4"></div>
      </div>
      </section>

       {/*tools*/}
       <section className='m-5'>
        <h1 className='text-center fw-bolder'>Tools</h1>
        <div className='container row align-items-center'>
  <div className="col-md-5">
    <div className='my-3'>
     <h4>Resume</h4>
     <p>Create unlimited new resume and easily edit them afterwards.</p>
    </div>
     <div className='my-3'>
     <h4>Cover Letter</h4>
     <p>Easily write professional cover letters.</p>
    </div>
      <div className='my-3'>
     <h4>Jobs</h4>
     <p>Automatically receive new and relevent job posting.</p>
    </div>
     <div className='my-3'>
     <h4>Applications</h4>
     <p>Effortlessly manage and track your job application in an organized manner.</p>
    </div>
  </div>
   <div className="col-md-1"></div>
  <div className="col-md-6">
    <img width={'560px'} src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
  </div>
        </div>
       </section>
        {/*image*/}
        <section style={{height:'400px',backgroundImage:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')",backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>

        </section>
         {/*testimony*/}
         <section className='m-5'>
          <h1 className='text-center my-5 fw-bolder'>Testimonials</h1>
         <div className='container row mt-5'>
          <div className="col-md-5">
            <h2 className='fw-semibold'>Trusted by professionals worldwide</h2>
            <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

           <p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

            <p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
        <div className="row">
            <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
            </div>


             <div className="row mt-3">
            <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/premium-photo/corporate-portrait-proud-with-business-man-office-start-professional-career-as-intern-company-confident-suit-with-smile-formal-employee-workplace-administration_590464-381909.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://watermark.lovepik.com/photo/20220316/large/lovepik-professional-business-woman-elite-image-picture_502367423.jpg" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://static.vecteezy.com/system/resources/previews/055/249/357/large_2x/confident-young-professional-man-in-bright-modern-corporate-environment-photo.jpg" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/f49a6531-9563-42d6-b2d4-57535f62c6b3/professional-headshot-female-outdoors" alt="" />
           </div>
            </div> 


                  <div className="row mt-3">
            <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://t4.ftcdn.net/jpg/01/34/51/81/360_F_134518160_5DyP0y6YqXQgG6FdorIvpk7M6CBNrglm.jpg" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/free-photo/happy-latin-businesswoman-standing-with-arms-crossed-against-isolated-background_662251-639.jpg" alt="" />
           </div>
           <div className="col-3">
            <img style={{width:'120px',height:'120px', objectFit: "cover"}} src="https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064973.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
           </div>
            </div>
          </div>
         </div>
         </section>
       </>
  )
}

export default LandingPage

