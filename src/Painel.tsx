import { FunctionComponent } from "react";
interface stepsType {
    
    actualStep: number
}


const Painel: FunctionComponent<stepsType> = ({actualStep}) => {

 const label=(index:number)=>{
   if(index == 1){
    return "YOUR INFO"
   }if(index == 2){
    return "SELECT PLAN"
   }if(index == 3){
    return "ADD-ONS"
   }if(index == 4){
    return "SUMMARY"
   }
 }
    const numbers:number[]=[1,2,3,4]
  return (
    <div className="bg-center md:rounded-lg md:m-2 bg-[url('/bg-sidebar-mobile.svg')] md:bg-[url('/bg-sidebar-desktop.svg')] bg-cover h-28 flex items-center justify-center gap-4 text-white md:flex-col md:w-4/12 md:h-auto md:justify-left md:items-center">
        {
            numbers.map((el,index)=>{
                return <div className="flex items-left gap-3 justify-left md:w-9/12">
                    <button key={index}  className={`btn-sidebar ${actualStep == el ?"bg-blue-200 text-black border-blue-200":""}`}>{el}</button>
                    <div className="hidden md:block">
                        <p className="text-sm text-indigo-300 font-medium">STEP {index+1}</p>
                     <h2 className="font-semibold">{label(index+1)}</h2>
                    </div>
                    
                    </div>})
        }
      

    </div>
  );
};

export default Painel;
