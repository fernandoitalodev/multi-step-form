import {  FunctionComponent, useEffect, useState } from "react"
type dataType={
setDataSetp1: React.Dispatch<React.SetStateAction<{
  name: string;
  email: string;
  phone: string;
}>>,
dataStep1: {
  name: string;
  email: string;
  phone: string;
}
}

const Step1: FunctionComponent<dataType> = ({setDataSetp1,dataStep1}) => {
    
   const[errorName,setErrorName]=useState(false)
   const[errorEmail,setErrorEmail]=useState(false)
  const [name,setName]=useState(dataStep1.name)
  const [email,setEmail]=useState(dataStep1.email)
  const [phone,setPhone]=useState(dataStep1.phone)

 useEffect(()=>{
  
  setDataSetp1({
    name:name,email:email,phone:phone
   })
   if(name == ""){
    setErrorName(true)
   }else{
    
    setErrorName(false)
   }
   
   if(email == ""){
    setErrorEmail(true)
    return
   } else{
    setErrorEmail(false)
    
   }
  
 },[name,email,phone])
const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
};

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value);
};

const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPhone(event.target.value);
};
  return (
    <div>
        <h2 className="h2">Personal Info</h2>
    <p className="p-style">Please provide your name, email address, and phone number. </p>

    <h3 className=" label-style">Name</h3>
    <input   onChange={handleNameChange} value={name}  className="input-style" placeholder="Ex.: Stephen King" />
    {errorName && <p className="text-sm text-red-500" >This field is required</p>}
    
    

    <h3 className=" label-style">Email Address</h3>
    <input  onChange={handleEmailChange} value={email}   className="input-style " placeholder="Ex.: stephenKing@gmail.com" />
    {errorEmail && <p className="text-sm text-red-500" > This field is required</p>}
    <h3 className=" label-style">Phone Number</h3>
    <input  onChange={handlePhoneChange} value={phone}   className="input-style " placeholder="Ex.: 86 98345-22xx" />
    </div>
  )
}

export default Step1