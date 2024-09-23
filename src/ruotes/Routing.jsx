import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Principal from '../pages/Principal';
import FormularioProductos from '../components/FormularioProductos';
import ProductosAgregadosForm from '../components/ProductosAgregadosForm';


const Routing = () => {
  return (
    <Router>
     <Routes>
       {/* <Route path='/' element={<Login/>}/>   */}
       <Route path='/Registro' element={<Registro/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/' element={<Principal/>}/>  
       <Route path='/FormularioProductos' element={<FormularioProductos />}/>
       <Route path='/productosAgregadosForm' element={<ProductosAgregadosForm />}/>
     </Routes>
    </Router>
   );
};
export default Routing;