import React from "react";

function List({addTodo, todoList }) {
  const onCompleted = (id) => {
    todoList[id].isCompleted = !todoList[id].isCompleted;
    addTodo([...todoList]);
  };
  const onDeleted = (id) => {
    todoList.splice(id,1);
    addTodo([...todoList]);
  };
  return (
    <>
      {todoList.map((todo, id) => {
        return (
          <li key={id} style={{ textDecoration:todo.isCompleted ? " line-through" : "", color: todo.isCompleted ? "#d9d9d9" : "#4d4d4d" }}>
            <div className="view">
              <label onClick={() => onCompleted(id)}>{todo.title}</label>
              <button className="destroy" onClick={() => onDeleted(id)}></button>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default List;
