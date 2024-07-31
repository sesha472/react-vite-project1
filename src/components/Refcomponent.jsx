






// import React, { useState,useRef} from "react";

// const Refcomponent = () => {
//   const [enteredplayername, setenteredplayername] = useState(null);

//   const inputdata = useRef("");

//   const toggleHandler = () => {
//     setenteredplayername(inputdata.current.value);
//     console.log(inputdata.current.value);
//     inputdata.current.value = "";
//   };
//   return (
//     <section>
//       <h1>your name : {enteredplayername ?? "unknown"}</h1>
//       <input type="text" ref={inputdata} />
//       <button onClick={toggleHandler}>show data</button>
//     </section>
//   );
// };

// export default Refcomponent;







// import React, { useState } from 'react'

// const Refcomponent = () => {
//     const [inputdata, setinputdata] = useState(null);
//     const [toggle, settoggle] = useState(false)
   
//     const inputHandler=(e)=>{
//     settoggle(false)

//         setinputdata(e.target.value)
//     }
// const toggleHandler=()=>{
//     settoggle(!toggle)
// }
//   return (
//     <section>

//       <h1>your name :  {toggle ? inputdata:"unknown"}</h1>
//       <input 
//       type='text'
//       value={inputdata}
//       onChange={inputHandler}
//       />
//       <button onClick={toggleHandler}>show data</button>
//     </section>
//   )
// }

// export default Refcomponent
