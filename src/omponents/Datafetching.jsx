import React from "react";
import { useReducer, useEffect } from "react";

const reducerfunction = (prvstate, action) => {
  switch (action.type) {
    case "FETECH_LOADING":
      return { ...prvstate,loading:true,error:null };
    case "FETCH_START":
      return { ...prvstate, loading: false, data: action.payload };
    case "FETCH_END":
      return { ...prvstate, loading: false, error: action.payload };

    default:
      return prvstate;
  }
};

const Datafetching = () => {
  
  const intialStatestate = {
    loading: true,
    data: null,
    error: null,
  };
  
  const [state, dispatch] = useReducer(reducerfunction, intialStatestate);

  const datagetter = async () => {
    try {
      dispatch({ type: "FETECH_LOADING" });
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await response.json();
      dispatch({ type: "FETCH_START", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_END", payload: error });
    }
  };



  useEffect(() => {
    datagetter();
  }, []);

  console.log(state);

    return (
          <div>
        {state.loading && <p>LOADING...</p>}
        {state.data && state.data.map((item)=>{
            return( <p key={item.id} >{item.name}</p>)
        })}
        {state.error && <div>{alert("somthing erroe occured")}</div>}
      </div>
      );
};

export default Datafetching;
