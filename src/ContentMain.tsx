import Step1 from "./Step1"
import { FunctionComponent, useEffect, useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ThankYou from "./ThankYou";
import NextAndPrev from "./NextAndPrev";


interface stepsType {
    
    actualStep: number
    ,setActualStep: React.Dispatch<React.SetStateAction<number>>

}

const ContentMain: FunctionComponent<stepsType> = ({actualStep,setActualStep}) => {

 
  const[dataStep1,setDataSetp1]=useState({
    name:"",email:"",phone:""
  })
  const [step2Data,setStep2Data]=useState<string[]>(["/icon-arcade.svg","Arcade","R$ 9.00","Montly"])
  const [step3Data,setStep3Data]=useState<string[][]>([ ])
  const[step4Data,setStep4Data]=useState({plan: step2Data, Adds: step3Data})
  
  useEffect(()=>{

    setStep4Data({plan: step2Data, Adds: step3Data})
  },[step2Data,step3Data])
  const [isMontly,setIsMontly]=useState(true)
  return (
    <div className="flex flex-col items-center relative    ">
        <div className="   rounded-xl min-h-[75vh]  w-full  top-24 p-5 md:relative md:top-auto">
            {
                actualStep == 1 &&   <Step1 dataStep1={dataStep1} setDataSetp1={setDataSetp1} />
            }{
                actualStep ==2 && <Step2 setStep2Data={setStep2Data} step2Data={step2Data} isMontly={isMontly} setIsMontly={setIsMontly} />
            }{
                actualStep ==3 && <Step3 isMontly={isMontly}  step3Data={step3Data} setStep3Data={setStep3Data} />
            }{
                actualStep ==4 && <Step4 isMontly={isMontly}  step4Data={step4Data} setActualStep={setActualStep} />
            }{
                actualStep ==5 && <ThankYou/>
            }
        </div>
<NextAndPrev actualStep={actualStep} setActualStep={setActualStep} />

    </div>
  )
}

export default ContentMain