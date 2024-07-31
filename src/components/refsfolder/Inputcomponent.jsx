import React, { forwardRef } from 'react'

const  Inputcomponent= forwardRef( function Inputcomponent ({type,label},ref){
  return (
    <section>
        <label>{label}</label>
      <input type={type}  ref={ref}/>
      
    </section>
  )
})

export default Inputcomponent
