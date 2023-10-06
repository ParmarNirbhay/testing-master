import React, { useState } from 'react'
let id = 0;
const PhoneBook = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [book, setBook] = useState([]);
    
    function handeler() {

        setBook([...book, { name: name+" ", number: " "+number, id: id++}])
        setName("")
        setNumber("")
    }


    return (
        <>
            <h1>Phone Book</h1>
            <div>
                <input type='text' style={{ display: 'block' }} value={name} onChange={(e) => setName(e.target.value)} /> Enter Name
                <input type='number' style={{ display: 'block' }} value={number} onChange={(e) => setNumber(e.target.value)} /> Enter Number
            </div>
            <button onClick={() => handeler()}>Add</button>
            <div>
                {book.map((b) => (
                    <ul key={b.id}>
                        <li>
                            {b.name}-{b.number}
                        </li>
                    </ul>
                ))}
            </div>
        </>

    )
}

export default PhoneBook