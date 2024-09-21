import React, { useState } from 'react'
import { mostrarAlerta } from './MostraAlerta';
import { Await } from 'react-router-dom';

function EditarProductos({id, }) {
 const [nuevoNombre, setNuevoNombre] = useState('');
 const [nuevaImagen, setNuevaImagen] = useState(''); 
 const [nuevaDescripcion, setNuevaDescripcion] = useState(''); 
 const [nuevoPrecio, setNuevoPrecio] = useState(''); 

const validarEditarForm = async ()=>{
 if (nuevoNombre.trim()==="" || nuevaImagen.trim()==="" || nuevaDescripcion.trim()==="" || nuevoPrecio.trim()==="") {
    mostrarAlerta('error', "Llenar espacios vacios")
 }

 const datosProductos = {
    nuevoNombre:nuevoNombre,
    nuevaImagen:nuevaImagen,
    nuevaDescripcion:nuevaDescripcion,
    nuevoPrecio:nuevoPrecio
 }

 await actualizarPoductos("products", id, datosProductos)

}

  return (
    <div>
    <h1>Edita tus Productos</h1>
     <form>
        <label>Nuevo nombre del Producto</label>
        <input type='name' className='nuevoNombre' value={nuevoNombre} placeholder='Ingresa el nuevo nombre de tu Producto' onChange={(e)=> setNuevoNombre(e.target.value)}></input>

        <label>Nueva Imagen</label>
        <input type='file' className='nuevaImagen' value={nuevaImagen} placeholder='Ingresa tu nueva immagen' onChange={(e)=> setNuevaImagen(e.target.value)}></input>

        <label>Nueva descripcion</label>
        <input type='text' className='nuevaDescripcion' value={nuevaDescripcion} placeholder='Ingresa una descripcion' onChange={(e)=> setNuevaDescripcion(e.target.value)}></input>

        <label>Nuevo precio</label>
        <input type='precio' className='nuevoPrecio' value={nuevoPrecio} placeholder='Ingresa el nuevo precio' onChange={(e)=> setNuevoPrecio(e.target.value)}></input>

        <button type='button' className='btnEditarFormulario' onClick={validarEditarForm}></button>

     </form>
    </div>
  )
}

export default EditarProductos