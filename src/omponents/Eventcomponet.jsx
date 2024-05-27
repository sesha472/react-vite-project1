import React,{useState,useEffect} from 'react';


const Eventcomponet = () => {
    const [scrennsize, setscrennsize] = useState({

        width:window.innerWidth,
        height:window.innerHeight
    })
const scrensizChangeHandler=()=>{
    setscrennsize({
        width:window.innerWidth,
        height:window.innerHeight
    })
}
useEffect(() => {
  window.addEventListener('resize',scrensizChangeHandler);

    return ()=>{
      window.removeEventListener('resize',scrensizChangeHandler)
    }
}, [])

  return (
    <>
    <p>screensize of the window </p>
    <h1 >width : <span style={{color:"yellow"}}>{scrennsize.width}</span></h1>
    <h1>height : <span style={{color:"yellow"}}>{scrennsize.height}</span></h1>
      
    </>
  )
}

export default Eventcomponet
