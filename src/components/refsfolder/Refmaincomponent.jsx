// import Inputcomponent from './Inputcomponent.jsx';
// import { useRef } from 'react';

//  export let Datainput={
//   username:'',
//   emailid:''
// }

// function Refmaincomponent() {

//    const nameref = useRef('')
//    const emailref = useRef('')


  
//  const handleclick=()=>{

//   Datainput.username=nameref.current.value
//   Datainput.emailid=emailref.current.value
//   console.log(Datainput);
//  }

//   return (
//     <div>
      
//       <Inputcomponent type="text" label="enter name" ref={nameref} />
//       <Inputcomponent type="email" label="enter email" ref={emailref}/>
//       <button onClick={handleclick}>send data to chaild</button>

//     </div>
//   );
// }

// export default Refmaincomponent;

import React ,{useRef}from 'react'

const Refmaincomponent = () => {
   const inputref = useRef(0);

   const refdataHandler=()=>{
         console.log(inputref.current.value);
         inputref.current.style.background="red";
      
   }

  return (
    <>
      <input type='text' ref={inputref}/>
      <button onClick={refdataHandler} >click</button>
    </>
  )
}

export default Refmaincomponent


// import React, { useRef } from 'react'
// import Inputcomponent from './Inputcomponent';

//  export const Datainput={
//     username:"",
//     email:" "
//  }
//  const Refmaincomponent = () => {
      
//       const nameref = useRef();
//       const emailref=useRef();
      
//       let {username,email}=Datainput;
//      const datasubmitHanlder=()=>{
//         username=nameref.current.value;
//         email=emailref.current.value;
//         console.log(username,email);
//      }
     
//   return (
//     <section>
//         <Inputcomponent type="text" label="entername" ref={nameref}  />
//         <Inputcomponent type="email" label="enetr email" ref={emailref}   />
//         <button onClick={datasubmitHanlder}>send data</button>
//     </section>
//   )
// }

// export default Refmaincomponent;