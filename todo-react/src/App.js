import './App.css';
import React, { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/Header/Header";

function App() {
    const [todo, setTodo] = useState(() => {
        const savedTodo = JSON.parse(localStorage.getItem('todo'));
        return savedTodo || [];
    });

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    return (
        <div className="App">
            <Header />
            <ToDoList todo={todo} setTodo={setTodo} />
        </div>
    );
}

export default App;