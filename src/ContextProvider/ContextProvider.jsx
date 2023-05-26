import React, { createContext, useContext ,useState} from 'react'
import FormFile from '../DropDownfiles/FormFile/FormFile'
import InputDroupDown from '../DropDownfiles/InputDropDown/InputDroupDown';
import Addopt from '../Andoperator/Addoption/Addopt';

const createContextProvider = createContext(null)
export function ContextProvider() {
    const [form, setForm] = useState("undefined");
    const [newForm,setNewForm] = useState("undefined")
    const [newFormone,setNewFormone] = useState("undefined")
    const [input, setInput] = useState([])
    const [True, setTrue] = useState("false")
    let [toggle,setToggle] = useState("false")
    let [data, setData] = useState("")
    let [firstInput,setFirstInput] = useState("My Arg")
    let [ addoption,setAddOption] = useState(false)
    let [ addoptionone,setAddOptionone] = useState(false)
    const [Constantval, setConst] = useState("false")
  let [arr,setArr] = useState([])
  let [istrue, setIsTrue] = useState(false)
  let [gettingval,setGettingval] = useState("")
   let [otherVal,setOtherval] = useState("")
   const secondInput = <input type='text' value={data} onInput={(e)=>{setData(e.target.value)}} ></input>
    const FirstInput = <input type='text'value={firstInput}></input>
   return (
    <div>
        <createContextProvider.Provider value={{form,setForm,input,setInput,True,setTrue,toggle,setToggle
        ,data, setData,arr,setArr,istrue, setIsTrue,secondInput,firstInput,FirstInput,gettingval,setGettingval
        ,otherVal,setOtherval,newForm,setNewForm,addoption,setAddOption,newFormone,setNewFormone,addoptionone,setAddOptionone
        ,Constantval, setConst
        }} >
        <InputDroupDown/>
        <FormFile/>
        
        </createContextProvider.Provider>
    </div>
  )
}

export let DataProvider = () =>{
    const {form,setForm,input,setInput,True,setTrue,toggle,setToggle
        ,data, setData,arr,setArr,istrue, setIsTrue,secondInput,firstInput,FirstInput
        ,gettingval,setGettingval
        ,otherVal,setOtherval,newForm,setNewForm,addoption,setAddOption
    ,newFormone,setNewFormone,addoptionone,setAddOptionone,Constantval, setConst} = useContext(createContextProvider)
    return{form,setForm,input,setInput,True,setTrue,toggle,setToggle
        ,data, setData,arr,setArr,istrue, setIsTrue,secondInput,firstInput,FirstInput
        ,gettingval,setGettingval
        ,otherVal,setOtherval,newForm,setNewForm,addoption,setAddOption,newFormone,setNewFormone,addoptionone,setAddOptionone
        ,Constantval, setConst}
}

