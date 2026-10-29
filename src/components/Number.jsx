
import { useState, useReducer } from "react";
import reducer from "./Reducer";

function Number() {
  const [number, setNumber] = useState("");
  const [result, dispatch] = useReducer(reducer, "");

  function handleClick() {
    dispatch({
      type: "SHOW-NUMBER",
      payload: number,
    });
  }

  return (
    
    <div className="click"  >   <h2>{result}</h2>
            
      <div className="input-result">  
        <input
          type="text"
          value={number}
          onChange={(event) =>
            setNumber(event.target.value)
          }
        />

        <button onClick={handleClick}>
        Show Number
        </button>

      </div>
      
    
    </div>

  );
}

export default Number;
