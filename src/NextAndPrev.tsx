
import { FunctionComponent } from "react";
interface stepsType {
    setActualStep: React.Dispatch<React.SetStateAction<number>>
,
    actualStep: number
}

const NextAndPrev: FunctionComponent<stepsType> = ({actualStep,setActualStep}) => {

  // const isEmptySteps=()=>{

  // }

  return (
    <div className={` ${actualStep ==1 ? "justify-end":"justify-between"} flex   p-5 bg-white w-full`}>
        
         <button onClick={()=>setActualStep(actualStep-1)} className={`text-gray-600 ${actualStep == 1 ?"hidden":""}`}>Go back</button>
         {
            actualStep <4 &&<button onClick={()=>setActualStep(actualStep+1)} className={`  p-2 border-2 rounded-lg bg-blue-950 text-white`}type="submit" >Next Step</button>
         } 
         {
            actualStep == 4 && <button onClick={()=>setActualStep(actualStep+1)}  className={`  p-2 border-2 rounded-lg bg-indigo-800 text-white`}>Confirm</button>
         }
         
    </div>
  )
}

export default NextAndPrev