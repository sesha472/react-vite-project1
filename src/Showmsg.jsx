import React ,{useState} from 'react';


const Showmsg = () => {
    const [show, setshow] = useState(false);
    const [username, setusername] = useState("")


  return (
    <>
    <div>
        {show ? <p>all the best </p>:null}
        
    <button onClick={()=>setshow(!show)}>show message</button>
    <p>github test text</p>
    
      
    </div>
    <div>
      <p>{username}</p>
      <input onChange={(event)=>setusername(event.target.value)} value={username}></input>
    </div>

    </>
  )
}

export default Showmsg
