import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/birdSlice'
import Likes from './Likes';

const AddBirds = () => {

    const [bird, setBird] = useState('');

    const dispatch = useDispatch();
    const birdsName = useSelector((state) => state.birds)

    const handleAdd = (value) => {
        
        dispatch(add(value))
        setBird("");
    }


    return (
        <div>
            <h1>Birds List</h1>
           
                <input type='text' value={bird} onChange={(e) => setBird(e.target.value)} />
                <div><button onClick={() => handleAdd(bird)} type="submit">submit</button></div>
            
            <div>
                {birdsName.slice(0).reverse().map((b, i) => ( 
                    <div key={i}>
                        <ul>
                            <li >
                                <h3>{b}</h3>
                                <Likes />
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddBirds