import { useState } from "react"
import ContentMain from "./ContentMain"

import Painel from "./Painel"




function App() {
  
  const [actualStep,setActualStep]=useState(1)

  return(<div className="h-full bg-sky-100 flex-col flex justify-center md:items-center  ">
    
      <div className="relative flex flex-col   md:flex-row md:m-5 md:rounded-lg md:p-2 bg-white  md:w-10/12 md:justify-center">
    
    <Painel  actualStep={actualStep} />
    <ContentMain  actualStep={actualStep} setActualStep={setActualStep}  />
      </div>
    
    
  </div> )
}

export default App
