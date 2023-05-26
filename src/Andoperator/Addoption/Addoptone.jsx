import React from 'react'
import { DataProvider } from '../../ContextProvider/ContextProvider'
import Options from '../../DropDownfiles/FormFile/Options'
import AndOperator from '../AndOperator'
import Argument from '../../DropDownfiles/Argument/Argument'
import Constant from '../../DropDownfiles/Constant/Constant'
function Addoptone() {
    let {newFormone,setNewFormone,setAddOptionone} = DataProvider()
    
    const CaptureEventone = (event) => {
        setNewFormone(event.target.value)
      }
     
  return (
    <div>
        { newFormone === "undefined"&& <form>
        <select value={newFormone} onChange={CaptureEventone}>
        <Options/>
        </select>
        <button>X</button>
      </form>}
      {newFormone === "Constant"&&<Constant/>}
      {newFormone === "Argument" && <Argument/>}
      {newFormone === "and" && <AndOperator/>}
      {newFormone === "and" && <button onClick={()=>setAddOptionone(true)} >+ Add </button>}
      
    </div>
  )
}

export default Addoptone