import React from "react";
import Item from "./Item"

function TodoLists(props){
    
    return(
        <ul className="name">
            {props.todolist.map((todo, i)=>{
                return <Item todo={todo} i={i} key={todo.id}/>
            })}
        </ul>
    )
}
export default TodoLists