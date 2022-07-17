import { useState } from 'react';
import './App.css';
import Form from "./components/Forms";
import List from "./components/List";
function App() {
  const [todosList,settodosList] = useState([]);
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form addtodoList={settodosList}/>
        </header>
        
        <section className="main">
          <ul className="todo-list">
            <List todosList={todosList}/>
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default App;
