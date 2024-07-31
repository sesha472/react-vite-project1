import React from 'react'

const ComponentB = () => {
    console.log("this is componnet B");
  return (
    <div>
      <p>this is Component b</p>
    </div>
  )
}

export default React.memo(ComponentB)
