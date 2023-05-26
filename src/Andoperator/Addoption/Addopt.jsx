import React, { useState } from 'react'
import Options from '../../DropDownfiles/FormFile/Options'
import { DataProvider } from '../../ContextProvider/ContextProvider'
import Constant from '../../DropDownfiles/Constant/Constant'
import AndOperator from '../AndOperator'
import Argument from '../../DropDownfiles/Argument/Argument'
function Addopt() {
    let {newForm,setNewForm,addoption,setAddOption} = DataProvider()
    
    const CaptureEvent = (event) => {
        setNewForm(event.target.value)
      }
     console.log(`this is new form ${newForm}`)
  return (
    <div>
        { newForm === "undefined"&& <form>
        <select value={newForm} onChange={CaptureEvent}>
        <Options/>
        </select>
        <button>X</button>
      </form>}
      {newForm === "Constant"&&<Constant/>}
      {newForm === "Argument" && <Argument/>}
      {newForm === "and" && <AndOperator/>}
      {newForm === "and" && <button onClick={()=>setAddOption(true)} >+ Add </button>}
      
    </div>
  )
}

export default Addopt