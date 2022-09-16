import React from "react"

function Item({ todo, i }) {
    return (
        <div className="text">
            <h2> {todo.title}</h2>
            <div className="card">
                <img src={todo.img} />
                <p>{todo.info}</p>
            </div>
            <button>{todo.price}</button>

        </div>


    )
}
export default Item