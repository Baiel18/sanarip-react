import React, {useState, useRef} from "react";
import UrokTwo from './Urok-two'
import UrokTree from './UrokTree'

function AppOne(){
    const [count,setCount] = useState(0)
    const [value,setValue] = useState(0)
    const inputRef = useRef(null);
    function decrement(){
        if(count > 0){
            setCount(count - 1)
        }
    }
    function getValue(){
        setValue(+inputRef.current.value * +inputRef.current.value )
    }

   
  
    return(
        <div className="counter">
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>

            <input className="input" type="text" name="name" ref={inputRef}/>
            <button onClick={getValue}>on</button>
                 <span>{value}</span>

        <UrokTwo />
        <UrokTree />
            
        </div>
    )
}
export default AppOne