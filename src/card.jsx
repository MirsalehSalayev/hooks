import React, { useState } from 'react';

function TodoList() {
    const [item, setItem] = useState([]);
    const [input, setInput] = useState('');

    const handle = () => {
        if (!input) {
            alert("bayra")
            return -1;
        } else {
            setItem([...item, input]);
            setInput('');

        }
    };

    return (
        <>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <div onClick={handle}>chixar</div>
            {item.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </>
    );
}

export default TodoList;
