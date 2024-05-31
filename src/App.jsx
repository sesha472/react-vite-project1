import React, { useState } from 'react'
import './App.css'
import Firstcomponent from './omponents/Firstcomponent';


function App() {
   const [first, setfirst] = useState(null)
      
   const resevingData=(text)=>{
     setfirst(text);
   }
  return (
    <div>
       <p>{first}</p>

      <Firstcomponent  fun={resevingData}/>

    
      
    </div>
  );
}

export default App
