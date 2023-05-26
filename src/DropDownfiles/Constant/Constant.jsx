import React, { useState } from 'react'
import { DataProvider } from '../../ContextProvider/ContextProvider'
function Constant() {
  let {setForm,Constantval, setConst} = DataProvider()
    
    const ConstFunc = (event) => {
        setConst(event.target.value)
      }
      console.log(Constantval)
    return (
    <div>
     <form>
      <select value={Constantval} onChange={ConstFunc}>      
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <button onClick={() => setForm("undefined")}>X</button>
    </form>
    <h4>Result : {Constantval}</h4>
    </div>
  )
}

export default Constant