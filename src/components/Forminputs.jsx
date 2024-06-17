
// import React, { useState } from 'react';

// function Forminputs() {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name: </label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Email: </label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Forminputs;

import React,{useState} from 'react'


const Forminputs = () => {
  const [formdata, setformdata] = useState({
    username:"",
    email:""
   })

   let {username,email}=formdata;
   const inputchangeHanlder=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
   }
 const submitHandler=(e)=>{
  e.preventDefault()
console.log(formdata);

 }
  return (
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='username' value={username} name="username" onChange={inputchangeHanlder}/>
      <input type='email' placeholder='eneter email' value={email} name="email" onChange={inputchangeHanlder}/>
     <input type='submit' name="submit"/>
    </form>
  )
}

export default Forminputs
