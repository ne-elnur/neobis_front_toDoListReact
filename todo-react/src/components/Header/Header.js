import React, { useState, useEffect } from "react";

function Header() {
    const [name, setName] = useState("");

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setName(savedName);
        }
    }, []);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        localStorage.setItem("name", newName);
    };

    return (
        <section className="greetings">
            <h2 className="title">
                What's up, <input type="text" value={name} placeholder="enter your name" onChange={handleNameChange}/>
            </h2>
        </section>
    )
}

export default Header;