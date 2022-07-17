import React, { useState } from "react";

function List({todosList}) {
  const [isActive,setIsActive] = useState(false)
  const handleClick = (current) => {
    setIsActive(current => !current)
  }
    return(
        <>
            <li onClick={handleClick} style={{textDecoration: isActive ? " line-through" : "",color: isActive ? "#d9d9d9" : "#4d4d4d"}}>
              <div className="view">
                <label>Kitap oku</label>
                <button className="destroy"></button>
              </div>
            </li>
            {todosList.map((todo,id) => {
              return <li key={id} onClick={handleClick} style={{textDecoration: isActive ? " line-through" : "",color: isActive ? "#d9d9d9" : "#4d4d4d"}}>
                        <div className="view">
                          <label>{todo}</label>
                          <button className="destroy"></button>
                        </div>
                      </li>
            })}
        </>
    )
}

export default List