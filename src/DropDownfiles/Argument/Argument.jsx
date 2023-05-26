import React, { useEffect, useState } from 'react'
import { DataProvider } from '../../ContextProvider/ContextProvider'
function Argument() {
  let {input,True,toggle,setForm,Constantval, setConst} = DataProvider()
  let [argval,setArgval] = useState("My Arg")
  console.log(input)
  let CaptureVal = (data) =>{
    setArgval(data)
  }
  useEffect(()=>{
     if(argval ==="My Arg"){
      setConst(toggle)
     }else{
      setConst(True)
     }
  },[argval,toggle,True])
  console.log(argval)
  return (
    <div>
        <form>
      <select value={argval} onChange={(e)=>CaptureVal(e.target.value)} >  
      <option value="My Arg" >My Arg</option>
        {input.map((e) =>{
          console.log(e)
          return(
            <>
            <option value={e.title}>{e.title}</option>)
            </>
          )
        })}          
      </select>
      <button onClick={() => setForm("undefined")}>X</button>
    </form>
    <h4>Result : {Constantval}</h4>
    </div>
  )
}

export default Argument