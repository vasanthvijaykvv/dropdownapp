import React, { useState } from 'react'
import { DataProvider } from '../../ContextProvider/ContextProvider';
import Constant from '../Constant/Constant';
import Argument from '../Argument/Argument';
import AndOperator from '../../Andoperator/AndOperator';
import Options from './Options';
import Addopt from '../../Andoperator/Addoption/Addopt';
import Addoptone from '../../Andoperator/Addoption/Addoptone';
function FormFile() {
    let {form,setForm,addoption} = DataProvider()
    let [addnew,setAddNew] = useState(false)
    const handleChange = (event) => {
      setForm(event.target.value)
    }
    console.log(addnew)
    return (
      <div className="App">
        { form === "undefined"&& <form>
        <select value={form} onChange={handleChange}>
        <Options/>
        </select>
        <button>X</button>
      </form>}
      {form === "Constant"&&<Constant/>}
      {form === "Argument" && <Argument/>}
      {form === "undefined" &&<h4>Result : {form}</h4>}
      {form === "and" && <AndOperator/>}
      {addnew && <Addopt/>}
      {addoption && <Addoptone/>}
      {form === "and" && <button onClick={()=>setAddNew(true)} >+ Add Option</button>}
      
      </div>
    );
}

export default FormFile