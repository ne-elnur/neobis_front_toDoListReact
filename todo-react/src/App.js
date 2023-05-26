import './App.css';
import React, {useState} from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/Header/Header";

function App() {

    const [todo, setTodo] = useState([])

  return (
    <div className="App">
      <Header />
      <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
