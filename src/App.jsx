import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Showmsg from './Showmsg'
import Eventcomponet from './omponents/Eventcomponet'
import Reducecounter from './omponents/Reducecounter'
import Datafetching from './omponents/Datafetching'
import Firstcomponent from './omponents/Firstcomponent'

function App() {
  const [data, setdata] = useState("this is app component state data");
  const [valuefromchaild, setvaluefromchaild] = useState("")
     
  const dataresever=(valuedata)=>{
    setvaluefromchaild(valuedata)
  }
  return (
    <div style={{backgroundColor:"green",padding:"10px"}}>
      <p>this is app component</p>
      <p>data from child :{valuefromchaild} </p>
    <Firstcomponent data={data} onfun={dataresever}/>

      {/* <Eventcomponet />
      <Showmsg />
      <Reducecounter />
      <Datafetching /> */}
    </div>
  );
}

export default App
