// import React ,{useState}from 'react'

// const Radiobuttons = () => {
//     const [selctedopction, setselctedopction] = useState()


// const handleChange=(e)=>{
//     setselctedopction(e.target.value);
//     console.log(e.target.value);
// }

//   return (
//     <div>
//         <h1>select the opctions </h1>
//       <label>
//       <input 
//       type='radio' 
//       value="opction1"
//       checked={selctedopction==="opction1"}
//       onChange={handleChange}
//       />
//         opction1</label>
//         <br></br>
      
//        <label>
//        <input 
//       type='radio' 
//       value="opction2"
//       checked={selctedopction==="opction2"}
//       onChange={handleChange}
//       />
//         opction2</label>
//         <br></br>
      
//         <label>
//        <input 
//       type='radio' 
//       value="opction3"
//       checked={selctedopction==="opction3"}
//       onChange={handleChange}
//       />
//         opction2</label>
//     </div>
//   )
// }

// export default Radiobuttons


// make radio buttons to chose one game and one type of  day 
// import React, { useState } from 'react'

// const Radiobuttons = () => {

//     const [opctions, setopctions] = useState(["cricket","football","baseball"]);
//     const [days, setdays] = useState(["weekday","weekend"]);

//     const [selcetedinputgame, setselcetedinputgame] = useState('');
//     const [selectdays, setselectdays] = useState('')

//     const gameChangeHandler=(e)=>{
//          setselcetedinputgame(e.target.value);
//     }

//     const dayselectHandler=(e)=>{
// setselectdays(e.target.value);

//     }

//     const selectHandler=()=>{
//         console.log(`selected input game is : ${selcetedinputgame}`);
//         console.log(`selected days : ${selectdays}`);
       
//     }
//   return (
//     <div>
//         <h1>select the game</h1>
//         {opctions.map((item,index)=>(
//           <section key={index}> 
//           <label >
//           <input 
//           type='radio'
//           value={item}
//           checked={selcetedinputgame===item}
//           onChange={gameChangeHandler}
//           />
//           {item}</label><br/></section> 
//         ))}
//         <h1>selct the days</h1>
//         {days.map((item,index)=>(
//           <section key={index}> 
//           <label >
//           <input 
//           type='radio'
//           value={item}
//           checked={selectdays===item}
//           onChange={dayselectHandler}
//           />
//           {item}</label><br/></section> 
//         ))}
//          <button onClick={selectHandler}>select opctions</button>
//     </div>
//   )
// }

// export default Radiobuttons;



import React, { useState } from 'react'

const Radiobuttons = () => {

    const [opctions, setopctions] = useState(["cricket","football","baseball"]);
    const [days, setdays] = useState(["weekday","weekend"]);
      
    const [selctedinputs, setselctedinputs] = useState({
        selcetedinputgame:'',
        selectdays:''
    })
    // const [selcetedinputgame, setselcetedinputgame] = useState('');
    // const [selectdays, setselectdays] = useState('')
    let {selcetedinputgame,selectdays}=selctedinputs;

    const gameChangeHandler=(e)=>{
         setselctedinputs({...selctedinputs,[e.target.name]:e.target.value})
    }

   

    const selectHandler=()=>{
        console.log(`selected input game is : ${selcetedinputgame}`);
        console.log(`selected days : ${selectdays}`);
       
    }
  return (
    <div>
        <h1>select the game</h1>
        {opctions.map((item,index)=>(
          <section key={index}> 
          <label >
          <input 
          type='radio'
          name="selcetedinputgame"
          value={item}
          checked={selcetedinputgame===item}
          onChange={gameChangeHandler}
          />.
          {item}</label><br/></section> 
        ))}
        <h1>selct the days</h1>
        {days.map((item,index)=>(
          <section key={index}> 
          <label >
          <input 
          type='radio'
          name="selectdays"
          value={item}
          checked={selectdays===item}
          onChange={gameChangeHandler}
          />
          {item}</label><br/></section> 
        ))}
         <button onClick={selectHandler}>select opctions</button>
    </div>
  )
}

export default Radiobuttons;

