import React,{useReducer} from 'react'


const reducefunction=(prvstate,action)=>{
    switch (action.type) {
        case  "incriment":
        return {...prvstate,count:prvstate.count+1}
        case  "decrement":
          return {...prvstate,count:prvstate.count-1}
          case "reset":
            return {count:0}
          default:
            return prvstate;
    }
}

const Reducecounter = () => {    
    const intialState={
        count:0,
    }
const [state, dispatch] = useReducer(reducefunction,intialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"incriment"})}>incriment</button>
     {state.count >0 ? <button onClick={()=>dispatch({type:"decrement"})}>dicrement</button>:<button>dicremnt</button>}
     <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Reducecounter
