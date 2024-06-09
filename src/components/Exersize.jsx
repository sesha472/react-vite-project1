







import React, { useState } from 'react';

const Exersize = () => {
  const [text, settext] = useState("hellow")
    
  const handleclick=()=>{
    settext(text+"world")
    settext('react');
  }  
  //the output would be react because its replaces the previous satte value 
    
  return (
    <div>
    <p>{text}</p> 
    <button onClick={handleclick}>click</button>
      
    </div>
  )
}
export default Exersize;





// exc1 
// import React, { useState,useEffect } from 'react';

// const Exersize = () => {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     setcount(count+2)
//    }, [])
//    useEffect(() => {
//     setcount(count+3)
//    }, [])

// when 2 useefects are there react will exicute in th eorder they are preent but they exicute in asynchronus
// render first, usefect setstate update the value
// agin another useeffect works with but not update value it would take intial value 9 only not updated value 

//   return (
//     <div>
//     <p>{count}</p> //3 
// 
      
//     </div>
//   )
// }

// export default Exersize

// exc2
// / import React, { useState } from 'react';
// const Exersize = () => {
//   const [state, setstate] = useState({count:0});
//   const handleclick=()=>{
//     setstate((prvstate=>({
//       count:prvstate.count+1
//     })))
//     setstate((prvstate=>({
//       count:prvstate.count+1
//     })))
//   }
//    //prvstate takes the prvious value also and calculate
//     // in this senario answer willbe add 2 for clik 
//   return (
//     <div>
//     <p>{state.count}</p> 
//     <button onClick={handleclick}>click</button>
      
//     </div>
//   )
// }

// export default Exersize


