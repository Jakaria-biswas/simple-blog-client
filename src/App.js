import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImage } from '@fortawesome/free-solid-svg-icons'
import {Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from '././components/Home/Home';

function App() {
  return ( 
    <>
       <nav>
             <NavLink className="nav-item" to="#"><FontAwesomeIcon icon={faHouse} /></NavLink>
             <NavLink className="nav-item" to="#"><FontAwesomeIcon icon={faImage} /></NavLink>
             <NavLink className="nav-item" to="#">login</NavLink>
       </nav>
       
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
            
    </>
  );
}

export default App;
