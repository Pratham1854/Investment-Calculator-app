import Header from "./component/Header"
import Result from "./component/Result"
import { useState } from "react";
import UserInput from "./component/UserInput"
function App() {
  const[userinput,setuserinput] =   useState({
    initialInvestment :10000,
    annualInvestment:1200,
    expectedReturn:12,
    duration:10,
});
const inputisvalid= userinput.duration>=1;
  function handlechange(inputidentifier,newvalue){
    setuserinput(prevuserinput=>
    {
        return{
            ...prevuserinput,
            [inputidentifier]:+newvalue
        }
    }
    )
}
  return (
    <>
    <Header/>
    <UserInput userinput={userinput} onChange={handlechange}/>
    {!inputisvalid && <p className="center">enter valid data</p>}
   {inputisvalid && <Result input={userinput}/>}
    </>
  )
}

export default App
