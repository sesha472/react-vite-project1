// import React,{useState} from 'react'

// const Practicehooks = () => {
//     const [data, setdata] = useState({
//         name:"sesha",
//         age:"31",
//         color:"white",
//         city:"hyd"
//     });
//   const updatedata=()=>{
//     setdata((prvstate)=>{
//          return {...prvstate,city:"nellore"}
//     })
//   }
    
//   return (
//     <div>
//         <h1>{`my name is ${data.name},my age is ${data.age} city is ${data.city}`}</h1>
//       <button onClick={updatedata}>show updated details</button>
//     </div>
//   )
// }
// export default Practicehooks

// import React from 'react'
// import { useState } from 'react'
// const Practicehooks = () => {
//     const [counter, setcounter] = useState(0)
//     const incriment=()=>{
//         // setcounter(counter+1)
//         // setcounter(counter+1)
//         // setcounter(counter+1)
//         // setcounter(counter+1)
//         // the bove will incriment by 1 only 
//         // setcounter(prvsta=>prvsta+1)
//         // setcounter(prvsta=>prvsta+1)
//         // setcounter(prvsta=>prvsta+1)
//         // setcounter(prvsta=>prvsta+1)
        
//     }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={incriment}> counter by 4</button>
//     </div>
//   )
// }
// export default Practicehooks


// import React from 'react'
// import { useEffect,useState } from 'react'

// const Practicehooks = () => {
//     const [counter, setcounter] = useState(0)
//     useEffect(()=>{
//          setTimeout(()=>{
//              setcounter((prvstate)=>prvstate+1)
//          },1000)
         
//     },[counter]);
    
//     // const incriment=()=>{
//     //     setcounter(counter+1);
//     // }
//   return (
//          <div>
//            <h1>{counter}</h1>
//            {/* <button onClick={incriment}> counter</button> */}
//         </div>   
//   )
// }

// export default Practicehooks;


// import React, { useRef, useState } from 'react'
// import { useEffect } from 'react';

// const Practicehooks = () => {
    
//     const [counter,setcounter] = useState(0);
//     const clickedcounters = useRef(0);
   
//       useEffect(()=>{
//         clickedcounters.current = clickedcounters.current + 1
//       })
    
//     return (
   
//    <div>
//     <button onClick={()=>setcounter(counter+1)}>incriment +1</button>
//     <h1>{counter}</h1>
//     <button onClick={()=>setcounter(counter-1)}>incriment +1</button>
//     <h1>you clicked {clickedcounters.current}  times </h1>
      
//     </div>
//   )
// }

// export default Practicehooks

// import React, { useRef } from 'react'
// const Practicehooks = () => {
//     const first = useRef(0);

//     const clickedHanlder=()=>{
//         console.log(first.current.value);
//         first.current.style.background="blue"
//     }
//   return (
//     <div>
//       <input type='text' ref={first} />
//       <button onClick={clickedHanlder}>click</button>
//     </div>
//   )
// }

// export default Practicehooks;


// import React from 'react'
// import { useMemo } from 'react';
// // import { useRef } from 'react';
// import { useState } from 'react'

// const Practicehooks = () => {
//     const [number, setnumber] = useState(0);
//     const [counter, setcounter] = useState(0)
    
//     const cubeofnum=(num)=>{
//         console.log("calculation done");
//         return Math.pow(num,3)
//      }
//      const result = useMemo(()=> cubeofnum(number),[number]);
//     // const result = useRef(0)
//     // result.current=cubeofnum(number)
//   return (
//     <div>
//         <input type='number' value={number} onChange={(e)=>setnumber(e.target.value)} />
//          {/* <h1>cube of number is {result.current}</h1> */}
//          <h1>cube of number is {result}</h1>

//          <button onClick={()=>setcounter((prvstate)=>prvstate+1)}> counter++ </button>
//          <h1>{counter}</h1>
//     </div>
//   )
// }
// export default Practicehooks


import React, { useCallback } from 'react'
import { useState } from 'react';
import ComponentB from './ComponentB';

const Practicehooks = () => {
const [counter, setcounter] = useState(0);

//  const newfun = useCallback((counter)=>{},[counter]);
 const newfun = useCallback(()=>{},[]);
  return (
    <div>
      <ComponentB newfun={newfun} />
      <h1>{counter}</h1>
      <button onClick={()=>setcounter((prvstate)=>prvstate+1)}>countre+1</button>
      
    </div>
  )
}

export default Practicehooks




