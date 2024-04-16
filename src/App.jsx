import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Showmsg from './Showmsg'
import Eventcomponet from './omponents/Eventcomponet'
import Reducecounter from './omponents/Reducecounter'
import Datafetching from './omponents/Datafetching'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Eventcomponet/>
       
      
      
      <Showmsg/>
      <Reducecounter/>
      <Datafetching/>
    </>
  )
}

export default App
