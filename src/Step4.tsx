import { FunctionComponent, useEffect, useState } from "react"

type step4Type={
    step4Data: {
    plan: string[];
    Adds: string[][];
}, isMontly:boolean,setActualStep:  React.Dispatch<React.SetStateAction<number>>
}

const Step4:FunctionComponent<step4Type> = ({step4Data,isMontly,setActualStep}) => {
  
    const [sumNum,setSumNum]=useState(0)
useEffect(()=>{
    setSumNum(0)
    let num=0;
    num+= Number(step4Data.plan[2])
    step4Data.Adds.map((el)=>{
    num+= Number(el[2])
    return setSumNum(num)
    })
},[step4Data])
  return (
    <div>
        
        <h2 className="h2">Finishing</h2>
    <p className="p-style"> Double-check everything looks OK before confirming. </p>
    <div className="p-3 flex flex-col justify-between ">
        <div className="border-b-2 flex justify-between items-center p-1">
            <div>
                <h3 className="text-blue-950 font-semibold" >{step4Data.plan[1]} ( {isMontly && " Montly"}{!isMontly && " Year"}  )</h3>
                <p className="text-gray-500 underline" onClick={()=>setActualStep(2)}>Change</p>
            </div>
            <h3 className="text-blue-950  font-medium" > +${step4Data.plan[2]} </h3>
        </div>
<div className="mb-12">
    {
        step4Data.Adds.map((el,index)=>{
            return <div key={index} className="flex justify-between ">
                <p className="p-style">{el[0]}</p>
                <h3 className="text-blue-950 p-2" >+${el[2]}/{el[3]}</h3>
            </div>
        })
    }
            
    
    
</div>
         <div className="flex justify-between items-center ">
            <p className="p-style">Total ({isMontly && "per month"} {!isMontly && "per Year"} )</p>
            <h3 className="text-indigo-800 p-2 font-bold">+${sumNum}/{isMontly && "mo"} {!isMontly && "yr"}</h3>
         </div>
    </div>

    
    </div>
  )
}

export default Step4