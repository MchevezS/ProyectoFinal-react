import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../style/FormRegistro.css'
import { getUsers, postUsers } from '../services/Llamados';
import { mostrarAlerta } from './MostraAlerta';

function FormRegistro() {
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [inputCodigo, setInputCodigo] = useState('');
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputNumero, setInputNumero] = useState('');
  const navigate = useNavigate()

async function validarFormRegistro() {


if (inputNombre.trim()==="" || inputCorreo.trim()==="" || inputPassword.trim()==="" || inputNumero.trim()==="") {
  mostrarAlerta("error", "Llenar campos vacios")
  return;
}

if (tipoUsuario === "cliente" && inputCodigo !== "C01" ) {
  mostrarAlerta("error", "Código del cliente incorrecto")

}else if (tipoUsuario === "admin" && inputCodigo !== "A159"){
  mostrarAlerta("error", 'Código de Administrador incorrecto')
  return;
}

const userData = {
  tipoUsuario: tipoUsuario,
  codigo: inputCodigo,
  name: inputNombre, 
  correo: inputCorreo,
  numero: inputNumero,
  clave: inputPassword
};

try {
  let usuarios = await getUsers();

  let usuarioExiste = usuarios.find(user => user.correo === inputCorreo);

  if (usuarioExiste) {
    if (usuarioExiste.name === inputNombre) {
      mostrarAlerta("error", 'Ya existe un usuario con el mismo nombre y correo')
    } else {
      mostrarAlerta("error", 'Correo en uso. Por favor, usar otro')
  }
}else{
  await postUsers (userData);
  mostrarAlerta("success", 'Registrado exitosamente')
  navigate('/Login');
}
} catch (error) {
  console.error('Error al procesar la solicitud:', error);
}

}
//cliente C01
// admin A159
  return (
    <div>
    <div>
       <h1 className='registro'>Registrarse!</h1>
     </div>
    <form>
     <label>Tipo de Usuario:</label>
        <select id="tipoUsuario" className='tipoUsuario' value={tipoUsuario} onChange={(e)=>{setTipoUsuario(e.target.value)}} required>
            <option value="cliente">cliente</option>  
            <option value="admin">Administrador</option>
        </select>

     <label htmlFor="codigo">código</label>
     <input type="text" className="inputCodigo" id="inputCodigo"  placeholder='Ingrese su código' value={inputCodigo} onChange={(e)=>{setInputCodigo(e.target.value)}} required/>

     <label className='nombreC'>Nombre completo</label>
     <input type='text' className='inputNombre' id='inputNombre' placeholder='Ingrese su Nombre completo' value={inputNombre} onChange={(e)=>{setInputNombre(e.target.value)}} required/>

     <label className='correo'>Correo</label>
     <input type='email' className='inputCorreo' id='inputCorreo' placeholder='Ingrese su Correo' value={inputCorreo} onChange={(e)=>{setInputCorreo(e.target.value)}} required/>
     
     <label className='password'>Password</label> 
     <input type='password' className='inputPassword' id='inputPassword' placeholder='Ingrese su password' value={inputPassword} onChange={(e)=>{setInputPassword(e.target.value)}} required/>

     <label className='numero'>Numero de telefono</label>
     <input type='number' className='inputNumero' id='inputNumero' placeholder='Ingrese su Número de telefono' value={inputNumero} onChange={(e)=>{setInputNumero(e.target.value)}} required/>

     <button type='button' className='btnRegistrarse' onClick={validarFormRegistro}>Registrarse</button>

     <Link to={"/Login"}>Ya tengo Cuenta</Link> 
    </form>
    </div>
  )
}

export default FormRegistro
