import { FunctionComponent, useEffect, useState } from "react"
import Switch from "react-switch";
const montlyPlans: string[][]=[
    ["/icon-arcade.svg","Arcade","9","/mo"],
    ["/icon-advanced.svg","Advanced","12","/mo"],
    ["/icon-pro.svg","Pro","15","/mo"],
   
]
const yearlyPlans: string[][]=[
    ["/icon-arcade.svg","Arcade","90","/yr"],
    ["/icon-advanced.svg","Advanced","120","/yr"],
    ["/icon-pro.svg","Pro","150","/yr"],
   
]

type  stepsType={
    setStep2Data: React.Dispatch<React.SetStateAction<string[]>>,
    step2Data:string[],
    isMontly: boolean,
    setIsMontly: React.Dispatch<React.SetStateAction<boolean>>

}

const Step2: FunctionComponent<stepsType> = ({setStep2Data,step2Data,isMontly,setIsMontly}) => {
   
    
    const [plan,setPlan]=useState<string[][]>(montlyPlans)
    useEffect(()=>{

    if(isMontly){
        setPlan(montlyPlans)
    }if(!isMontly){
        setPlan(yearlyPlans)
    }
    },[isMontly])
  return (
    <div >
        <h2 className="h2">Select your plan</h2>
    <p className="p-style">You have the option of monthly or yearly billing. </p>
<div className="h-72">
    
    {plan.map((el,index)=>{
       return <div onClick={()=>setStep2Data(el)} key={index} className={` ${step2Data == el ?"border-blue-950":""} mb-3 flex gap-3 items-center border  p-2 rounded-xl `}>
        <div className="">
            <img src={el[0]} alt="" />
        </div>
        <div className="">
            <h3 className="font-medium text-blue-950">{el[1]}</h3>
            <p className="text-sm text-gray-500  ">${el[2]}{el[3]}</p>
           {!isMontly&& <h4 className="text-sm text-blue-950" >2 meses grátis</h4>}
        </div>
       </div>
    })}
    
</div> 
   <div className="flex justify-center items-center gap-3">
    <h2 className={`font-medium ${isMontly?"text-blue-950":""} `} >Mensal</h2>
<Switch onChange={()=>setIsMontly(!isMontly)} checked={!isMontly ? true :false} offColor="#03295a" onColor="#03295a" uncheckedIcon={false} checkedIcon={false}/>
    <h2 className={` font-medium ${!isMontly ?"text-blue-950":""}`} >Anual</h2>
   </div>

    </div>
  )
}

export default Step2