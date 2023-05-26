import React, { useEffect, useState } from 'react'
import Options from '../DropDownfiles/FormFile/Options'
import { DataProvider } from '../ContextProvider/ContextProvider'
import Constant from '../DropDownfiles/Constant/Constant'



function AndOperator() {
    let {form,setForm,input,toggle,firstInput,True,secondInput,gettingval,setGettingval
    ,otherVal,setOtherval,data,Constantval, setConst} = DataProvider()
   let [andor,setAndOr] = useState("and")
   let [isArgumentone,setIsArgumentone] =useState("")
   let [isArgumenttow,setIsArgumentTwo] =useState("")
   let [valueone,setValueOne] = useState("My Arg")
   let [valueTwo,setValueTwo] = useState("My Arg")
   
   
   const handleChange = (event) => {
    setForm(event.target.value)
  }
 useEffect(()=>{
     if(valueone===firstInput){
        console.log("entred")
        setGettingval(toggle)
     }
     if(valueone!==firstInput){
        setGettingval(True)
     }
     if(valueTwo===data){
        setOtherval(True)
     }
     if(valueTwo!==data){
        setOtherval(toggle)
     }
 },[valueone,valueTwo,toggle,True])
 console.log(valueTwo,data,gettingval,otherVal)
  return (
    <div>
           <select value={andor} onChange={(e)=>setAndOr(e.target.value)}>      
                   <option value="and">and</option>
                   <option value="or">or</option>                   
              </select>
              <br></br>
             {(isArgumentone === "Argument") ?(<select value={valueone} 
             onChange={(e)=>setValueOne(e.target.value)}> 
                <option value="My Arg" >My Arg</option>
                    {input.map((e) =>{
                        
                     return(
                      <>
                      <option value={e.title}>{e.title}</option>)
                   </>
               )
                   })}  

             </select>):            
             ((isArgumentone === "Constant" ) ?  (<Constant/> ) : <select value={isArgumentone} onChange={(e) => setIsArgumentone(e.target.value)} >
               <Options/>
              </select>)
              }
              {isArgumentone !== "Constant"&&<button>X</button>}
              <br></br>
              {(isArgumenttow === "Argument")?(
                <select value={valueTwo} onChange={(e)=>setValueTwo(e.target.value)}> 
                <option value="My Arg" >My Arg</option>
                    {input.map((e) =>{
                        
                     return(
                      <>
                      <option value={e.title}>{e.title}</option>)
                   </>
                     )
                   })}  
             </select>
              ):
              ((isArgumenttow === "Constant" ) ?  (<Constant/> ) :<select value={isArgumenttow} onChange={(e) => setIsArgumentTwo(e.target.value)}>
              <Options/>
                </select>)}
                {isArgumenttow !== "Constant"&&<button>X</button>}
                <br></br>
                
                
              {(andor === "and")?(
                  <div>
                    {(gettingval === "false" || otherVal === "false") ? <h3>Result : false</h3>                    
                  :<h3>Result : true</h3>}                    
                  </div>
              ):(
                <div>
                {((gettingval === "false") && (otherVal === "false")) ? <h3>Result : false</h3>                    
              :<h3>Result : true</h3>}                    
              </div>
              )}

              
    </div>
  )
}

export default AndOperator