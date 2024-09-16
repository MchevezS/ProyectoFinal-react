import React, { useState } from 'react'
import { getUsers } from '../services/Llamados';
import FormRegistro from './FormRegistro';
import { Link, useNavigate } from 'react-router-dom';


function FormLogin() {
   const [tipoUsuarioL, setTipoUsuarioL] = useState('');    
   const [codigo, setCodigo] = useState('');
   const [correo, setCorreo] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

 async function validarLogin() {

 if (codigo.trim()==="" || correo.trim()==="" || password.trim()==="") {
   alert('Llenar campos vacios') 
 }

 if (tipoUsuarioL === "cliente" && codigo !== "C01") {
  alert("Código del cliente incorrecto")

}else if (tipoUsuarioL === "admin" && codigo !== "A159"){
  alert('Código de Administrador incorrecto')
  return;
}

try {
  let usuarios = await getUsers();

   let usuario = usuarios.find(user => user.correo === correo && user.clave === password);

if (usuario) {
    navigate("/Principal")
} else{
  alert('No se ha encontrado un usuario con ese Correo electronico.')
}



} catch (error) {
  alert('Ocurrio un error al procesar tu solitud. Intentalo de nuevo mas tarde.')
}
    
 }
  return (
    <div>
      <h1>Inia!</h1>
    
    <form>
      <label>Tipo de Usuario:</label>
        <select id="tipoUsuarioL" className='tipoUsuarioL' value={tipoUsuarioL} onChange={(e)=>{setTipoUsuarioL(e.target.value)}} required>
            <option value="clienteL">cliente</option>  
            <option value="adminL">Administrador</option>
        </select>

     <label htmlFor="codigo">código</label>
     <input type="text" className="codigo" id="codigo"  placeholder='Ingrese su código' value={codigo} onChange={(e)=>{setCodigo(e.target.value)}} required/>

     <label className='correo'>Correo</label>
     <input type='email' className='correo' id='correo' placeholder='Ingrese su Correo' value={correo} onChange={(e)=>{setCorreo(e.target.value)}} required/>
     
     <label className='password'>Password</label> 
     <input type='password' className='password' id='password' placeholder='Ingrese su password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>

     <button type='button' className='btnLogin' onClick={validarLogin}>Iniciar Sesion </button>
     <br/>
     <Link to={"/Registro"}>No tienes cuenta? Registrate Aqui</Link>
    </form>
    </div>
  )
}

export default FormLogin
