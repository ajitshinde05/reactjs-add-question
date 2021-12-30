import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddQuestionScreen from './screens/AddQuestionScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './screens/Component/NavBar';

import NotFound from './screens/Component/NotFound';
import ContactUs from './screens/ContactUs';


const App=()=> {
  return (
    <Router>
      
      <NavBar />
      <Routes>
        <Route path='/' element={<AddQuestionScreen/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

