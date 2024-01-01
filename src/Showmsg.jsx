import React ,{useState} from 'react';


const Showmsg = () => {
    const [show, setshow] = useState(false);


  return (
    <div>
        {show ? <p>all the best </p>:null}
    <button onClick={()=>setshow(!show)}>show message</button>
      
    </div>
  )
}

export default Showmsg
