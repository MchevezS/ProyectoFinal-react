import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Registro from '../pages/Registro';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path='/' element={<Registro/>}/> 
       <Route path='/registro' element={<Registro/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
    </Router>
   );
};
export default Routing;