import React, { useState } from 'react'
import axios from 'axios'
const Sort = () => {

    const [userList, setUserList] = useState([]);
    const [originalUser, setoriginalUser] = useState([]);
    const [step, setStep] = useState('1');
    
    // async function getList() {
    //     const responce = await axios.get("https://jsonplaceholder.typicode.com/users");
    //     setoriginalUser(responce.data)
    //     setUserList(responce.data)
    //     console.log();

    // }
    function getList(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setoriginalUser(res.data)
            setUserList(res.data)
        })
    }
    
    function sortUser() {
        if (step === '1') {
            const assending = [...userList].sort((a, b) => a.name.length - b.name.length);
            setUserList(assending);
            // console.log("asasdasd"+assending)
            setStep('2')
        }
        if(step === '2') {
            const descending = [...userList].sort((a,b) => b.name.length - a.name.length);
            setUserList(descending);
            setStep('3')
        }
        if(step === '3'){
            setUserList(originalUser);
            setStep('1')
        }

    }

    return (
        <div>
            <h1>User names</h1>
            <button onClick={getList}>get list</button>
            <button onClick={sortUser}>sort</button>
            {<ul>
                {userList.map((d) => (
                    <li key={d.id}>{d.name}</li>
                ))}
            </ul>}
        </div>
    )
}

export default Sort