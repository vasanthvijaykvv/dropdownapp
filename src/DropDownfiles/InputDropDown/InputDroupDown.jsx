import React from 'react'
import { DataProvider } from '../../ContextProvider/ContextProvider'

function InputDroupDown() {
  let {input,setInput,True,setTrue,toggle,setToggle,data,secondInput,arr,setArr,istrue, setIsTrue,FirstInput} = DataProvider()
  
  
  let AddInput = () =>{
    setArr([...arr,1])
     }
 
  let GetInput = () =>{    
     if(!istrue && True !=="false"){      
      if(True === "true"&&data.length !==0){          
        setInput([...input,{id:Math.random(),title:data}])  
        setIsTrue(!istrue)           
    }
     }    
  }
   console.log(input)
  return (
    <div>
        <form >
                {FirstInput}
                <select value={toggle} onChange={(e)=>setToggle(e.target.value)}>      
                   <option value="false">false</option>
                   <option value="true">true</option>
              </select>
                </form>
            {arr.map((t,i)=>{
            return (
                <form key={i+1}>
                {secondInput}
                <select value={True} onChange={(e)=>setTrue(e.target.value)} onClick={GetInput}>      
                   <option value="false">false</option>
                   <option value="true">true</option>
              </select>
                </form>
                   )
              })}<button type='button' onClick={AddInput}>+Add arg</button>            
    </div>
  )
}
export default InputDroupDown