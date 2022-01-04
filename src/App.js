import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Detailpage from './screens/Detailpage';


import NotFound from './screens/Component/NotFound';


const App=()=> {
  return (
    <Router>
      
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detailPage' element={<Detailpage/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

