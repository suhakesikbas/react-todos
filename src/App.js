import { useState } from "react";
import "./App.css";
import Form from "./components/Forms";
import List from "./components/List";
function App() {
  const [filter, setFilter] = useState(null);
  const [todoList, setTodoList] = useState([
    {
      title: "Breakfast",
      isCompleted: true,
    },
    {
      title: "Work",
      isCompleted: false,
    },
    {
      title: "Run",
      isCompleted: false,
    },
  ]);
  const filtered = filter === null ? todoList : todoList.filter((t) => t.isCompleted===filter);
  const clearList = () => {
    setTodoList([...todoList.filter((t) => !t.isCompleted)]);
  };

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form addTodo={setTodoList} todoList={todoList} />
        </header>

        <section className="main">
          <ul className="todo-list">
            <List addTodo={setTodoList} todoList={filtered} />
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="void(0)" onClick={() => setFilter(null)} className={filter===null ? "selected":""}>
                All
              </a>
            </li>
            <li>
              <a href="void(0)" onClick={() => setFilter(false)} className={filter===false? "selected":""}>Active</a>
            </li>
            <li>
              <a href="void(0)" onClick={() => setFilter(true)} className={filter ? "selected":""}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearList}>
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
