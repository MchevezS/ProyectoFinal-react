import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Principal from '../pages/Principal';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path='/' element={<Login/>}/> 
       <Route path='/registro' element={<Registro/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/Principal' element={<Principal/>}/>  
     </Routes>
    </Router>
   );
};
export default Routing;