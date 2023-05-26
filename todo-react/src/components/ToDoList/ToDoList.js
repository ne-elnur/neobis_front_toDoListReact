import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [edit, setEdit] = useState(null);

    function saveTodo(e) {
        e.preventDefault();

        if (!selectedCategory) {
            alert('Please select a category');
            return;
        }

        const newTodo = [
            ...todo,
            {
                id: uuidv4(),
                title: value,
                status: false,
                category: selectedCategory,
            },
        ];
        setTodo(newTodo);
        setValue('');
        setSelectedCategory('');
    }

    function deleteTodo(id) {
        const newTodo = todo.filter(item => item.id !== id);
        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }

    function saveEditedTodo(id) {
        const newTodo = todo.map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        });
        setTodo(newTodo);
        setEdit(null);
    }

    function toggleTodoStatus(id) {
        const newTodo = todo.map(item => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodo(newTodo);
    }

    return (
        <div>
            <section className="create-todo">
                <form onSubmit={saveTodo}>
                    <h4>What's on your ToDoList?</h4>
                    <input
                        type="text"
                        placeholder="e.g. Bring milk"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <h4>Pick a category</h4>
                    <div className="options">
                        <label htmlFor="category1">
                            <input
                                type="radio"
                                name="category"
                                value="business"
                                id="category1"
                                checked={selectedCategory === "business"}
                                onChange={e => setSelectedCategory(e.target.value)}
                            />
                            <span className="bubble business"></span>
                            <div>Business</div>
                        </label>
                        <label htmlFor="category2">
                            <input
                                type="radio"
                                name="category"
                                value="personal"
                                id="category2"
                                checked={selectedCategory === "personal"}
                                onChange={e => setSelectedCategory(e.target.value)}
                            />
                            <span className="bubble personal"></span>
                            <div>Personal</div>
                        </label>
                    </div>

                    <input type="submit" value="Add Todo" />
                </form>
            </section>

            <section className="todo-list">
                <h3>TODOLIST:</h3>
                <div className="todo-items-container">
                    {todo.map(item => (
                        <div key={item.id} className={`todo-item ${item.status ? "done" : ""}`}>

                                <label className="check-done">
                                    <input
                                        type="checkbox"
                                        id={`todoCheckbox-${item.id}`}
                                        checked={item.status}
                                        onChange={() => toggleTodoStatus(item.id)}
                                    />
                                    <span className={`bubble ${item.category}`}></span>
                                </label>
                                {edit === item.id ? (
                                    <div className="todo-item-title">
                                        <input
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                        />
                                    </div>
                                ) : (
                                    <div className="todo-item-title">{item.title}</div>
                                )}

                            {edit === item.id ? (
                                <div className="actions">
                                    <button className="actions edit" onClick={() => saveEditedTodo(item.id)}>
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div className="actions">
                                    <button className="actions delete" onClick={() => deleteTodo(item.id)}>
                                        Delete
                                    </button>
                                    <button className="actions edit" onClick={() => editTodo(item.id, item.title)}>
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ToDoList;
