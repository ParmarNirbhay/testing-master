import logo from './logo.svg';
import './App.css';
import Likes from './Component/Likes';
import AddBirds from './Component/AddBirds';
import PhoneBook from './Component/PhoneBook';
import TaskManager from './Component/TaskManager';
import Timer from './Component/Timer';
import Covid from './Component/Covid';
import Covid2 from './Component/Covid2';
import Sort from './Component/Sort';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import NavBar from './Component/NavBar';

function App() {
  return (
    // <BrowserRouter>
    // <NavBar/>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/About' element={<About/>}/>
    //   </Routes>
    // </BrowserRouter>
    <>
    <AddBirds/>

    </>
    
  );
}

export default App;
