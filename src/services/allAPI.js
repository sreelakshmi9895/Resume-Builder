import commonAPI from "./CommonAPI";
import ServerURL from "./ServerURL";

// create add api - called bu UserInputs,when finish btn clicked
export const addNewResumeAPI = async (resume)=>{
   return await commonAPI(`${ServerURL}/resumes,"POST",resume`)
}

// get resume api 