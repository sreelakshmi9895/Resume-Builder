import commonAPI from "./CommonAPI";
import ServerURL from "./ServerURL";

// create add api - called bu UserInputs,when finish btn clicked
export const addNewResumeAPI = async (resume)=>{
   return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

// get resume api -called from viewResume , when page load(), inside useEffect hook
export const getResumeAPI = async (id)=>{
   return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}

// update resume api
export const updateResumeAPI = async (id,resume)=>{
   return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}

// add  history api
// get history api 
// remove history api 