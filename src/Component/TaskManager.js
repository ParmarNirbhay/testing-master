import React, { useReducer, useState } from 'react'
const innitialState = [];
let nextId = 0;

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return [...state, {
            name: action.payload,
            id: nextId++
        }]
        case 'EDIT': state.map(s => {
            if (s.id === action.payload) {
                return action.state
            } else {
                return s
            }
        })
        case 'REMOVE': return state.filter((d) => d.id !== action.payload)
        default: return state
    }
}
const TaskManager = () => {
    const [text, setText] = useState("");
    const [todo, dispatch] = useReducer(reducer, innitialState);
    function handleAdd() {
        if(!text)
        return;
        dispatch({ type: 'ADD', payload: text })
        setText("")
    }
    function handleRemove(v) {
        dispatch({ type: 'REMOVE', payload: v })
    }
    return (
        <div>
            <h1>Task Manager</h1>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => handleAdd()}>Add</button>

            <div>
                {todo.map((t) => (<ul key={t.id}>
                    <li>
                        {t.name}
                        <span><button onClick={() => handleRemove(t.id)}>Remove</button></span>
                    </li>
                </ul>))}
            </div>
        </div>
    )
}

export default TaskManager