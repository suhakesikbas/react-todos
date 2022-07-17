import React, { useState } from "react";

function Form({ addtodoList }) {
    const [todo,setTodo] = useState("")
    const [todos,setTodos] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodos(todos => [...todos,todo])
        setTodo("")
        addtodoList((todos => [...todos,todo]))
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={e => setTodo([e.target.value])}  className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
        
        </>
    )
}

export default Form