

import React, { useState } from 'react'

const Firstcomponent = (props) => {
   
  const [inputdata, setinputdata] = useState("");

    const changeHandler=(e)=>{
      setinputdata(e.target.value);
    }

     const sednidgfnuction =()=>{
      props.onfun(inputdata)
     }
  return (
    <div style={{backgroundColor:'blue',padding:'10px'}}>

     <input type='text' 
     value={inputdata}
     onChange={changeHandler}/>
     <button onClick={sednidgfnuction}>send data to parrentcomponnet</button>

    </div>
  )
}

export default Firstcomponent


// import React, { useState } from 'react'
// const Firstcomponent = () => {
//     const [count, setcount] = useState(0);

//    const incrementHandler=()=>{
//     setcount(count+1)
//    }

//    const dicrementHandler=()=>{
//     setcount(count-1)
//    }

//   return (
//     <div>
//       <h1>This is normal increment component </h1>
//       <p>{count}</p>
//       <button onClick={incrementHandler}>incriment</button>
//       <button onClick={dicrementHandler}>dicrement</button>
//     </div>
//   )
// }

// export default Firstcomponent;
// import React, { useReducer } from 'react';
//   const intialstate={
//   count:0
// }
//    const reducerfuntion = (prvstate, action) => {
//      switch (action.type) {
//        case "incriment":
//          return { ...prvstate, count: prvstate.count + 1 };
//        case "dicremnt":
//          return { ...prvstate, count: prvstate.count - 1 };
//         case "reset":
//           return({...prvstate,count:0})
//        default:
//          return prvstate;
//      }
//    };

// const Firstcomponent = () => {
//     const [state, dispatch] = useReducer(reducerfuntion,intialstate);
//   return (
//     <div>

//         <h1>this is using reducer</h1>
//         <p>{state.count}</p>
//         <button onClick={()=>dispatch({type:"incriment"})}>incriment</button>
//         <button onClick={state.count>0 ?()=>dispatch({type:"dicremnt"}):null}>dicrement</button>
//         <button onClick={  (()=>dispatch({type:"reset"}))}>dicrement</button>

      
//     </div>
//   )
// }
// export default Firstcomponent


//  import React,{useRef,useState} from 'react'
 
//  const Firstcomponent = () => {
//   const [data, setdata] = useState("");
//   const refvalue = useRef(0);

//   const inputHandler=()=>{
//     console.log(refvalue.current.value);
//    setdata(refvalue.current.value)
//   }
   
//    return (
//      <div>
//       <p>{data}</p>
//       <input type='text' ref={refvalue} />
//       <button onClick={inputHandler}>click</button>
       
//      </div>
//    )
//  }
 
//  export default Firstcomponent
 


// import React, { useState,useRef,useEffect } from 'react'
// const Firstcomponent = () => {
//   const [count, setcount] = useState(0);
//   let refvalue=useRef(0);
//   console.log(refvalue);
//    useEffect(() => {   
//     refvalue.current++
//    });
//     console.log(refvalue.current);
//   return (
//     <div>
//       <h1>this is count value : {count}</h1>
//       <p>value changed {refvalue.current} times</p>
//       <button onClick={()=>setcount(count+1)}>incriment</button>
//       <button onClick={()=>setcount(count-1)}>incriment</button>   
//     </div>
//   )
// }
// export default Firstcomponent;

