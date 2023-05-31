import { FunctionComponent, useEffect, useState } from "react"

type step3Type ={
  step3Data: string[][],
  setStep3Data: React.Dispatch<React.SetStateAction<string[][]>>,
  isMontly:boolean
}

const Step3: FunctionComponent<step3Type> = ({step3Data,setStep3Data,isMontly}) => {
    const addOns: string[][] =[
        ["Online Service","Access to multiplayer games","1","mo"],
        ["Larger Storage","Extra 1TB of cloud save","2","mo"],
        ["Customizable profile","Custom theme on your profile","2","mo"],
    ]
    const addOnsYearly: string[][] =[
      ["Online Service","Access to multiplayer games","10","yr"],
      ["Larger Storage","Extra 1TB of cloud save","20","yr"],
      ["Customizable profile","Custom theme on your profile","20","yr"],
  ]
  const [list,setList]=useState(addOns)
    const isChecked=(el:string[])=>{
       for(let i=0;i< step3Data.length; i++){
        const arr=el
           if(arr[0] == step3Data[i][0]){
           
            return true
          }
        
       }
       
       
    }
    const addChecked=(el:string[])=>{
        const is= isChecked(el)
       if(!is){
        setStep3Data( (prevData)=>[...prevData, el])
       
        return
       }else{
        const filter=step3Data.filter((item)=> JSON.stringify(item) !== JSON.stringify(el))
       setStep3Data([...filter]) 
        console.log("filter: "+step3Data)
       }
    }
    useEffect(()=>{
      if(isMontly){
        setList(addOns)
      }else{
         setList(addOnsYearly)
      }
    },[isMontly])
    
  return (
    <div>
        <h2 className="h2">Pick add-ons</h2>
    <p className="p-style">Add-ons help enhance your gaming experience. </p>
    { list.map((el,index)=>{
        return <div key={index} className={` m-2 flex border p-2 rounded-xl items-center justify-between ${isChecked(el)?"border-blue-950":""} `}>
        <input type="checkbox" name="" id="" className={`w-5 h-5 form-checkbox checked:bg-indigo-800  `} onClick={()=> addChecked(el)} checked={isChecked(el) ? true : false} />
        <div className="">
            <h3 className="font-medium text-blue-950" >{el[0]}</h3>
            <p className="p-style indent-0 p-1">{el[1]}</p>
        </div>
        <h2 className="text-indigo-800" >+${el[2]}/{el[3]}</h2>
    </div>
    })

    }

    </div>
  )
}

export default Step3