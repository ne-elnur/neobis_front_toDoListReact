import './App.css';
import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/Header/Header";

function App() {

    return (
        <div className="App">
            <Header />
            <ToDoList />
        </div>
    );
}

export default App;