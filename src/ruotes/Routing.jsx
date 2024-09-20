import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Principal from '../pages/Principal';
import FormularioProductos from '../components/FormularioProductos';


const Routing = () => {
  return (
    <Router>
     <Routes>
       {/* <Route path='/' element={<Login/>}/>   */}
       <Route path='/registro' element={<Registro/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/principal' element={<Principal/>}/>  
       <Route path='/' element={<FormularioProductos/>} />
     </Routes>
    </Router>
   );
};
export default Routing;