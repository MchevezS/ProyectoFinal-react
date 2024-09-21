import React, { useState } from 'react'
import { mostrarAlerta } from './MostraAlerta';
import { updateUsers } from '../services/Llamados';

function EditarProductos({id, }) {
 const [nuevoNombre, setNuevoNombre] = useState('');
 const [nuevaImagen, setNuevaImagen] = useState(null); 
 const [nuevaDescripcion, setNuevaDescripcion] = useState(''); 
 const [nuevoPrecio, setNuevoPrecio] = useState(''); 

const validarEditarForm = async ()=>{
 if (nuevoNombre.trim()==="" || !nuevaImagen || nuevaDescripcion.trim()==="" || nuevoPrecio.trim()==="") {
    mostrarAlerta('error', "Llenar espacios vacios")
   return;
   }

 const datosProductos = {
    nuevoNombre:nuevoNombre,
    nuevaImagen:nuevaImagen,
    nuevaDescripcion:nuevaDescripcion,
    nuevoPrecio:nuevoPrecio
 }

 try {
   await updateUsers("products", id, datosProductos);
   mostrarAlerta('success', "Producto actualizado correctamente");
 } catch (error) {
   console.error("Error actualizando el producto", error);
   mostrarAlerta('error', "Error al actualizar el producto")
 }
 
};

  return (
    <div>
    <h1>Edita tus Productos</h1>
     <form>
        <label>Nuevo nombre del Producto</label>
        <input type='name' className='nuevoNombre' value={nuevoNombre} placeholder='Ingresa el nuevo nombre de tu Producto' onChange={(e)=> setNuevoNombre(e.target.value)}></input>

        <label>Nueva Imagen</label>
        <input type='file' className='nuevaImagen' placeholder='Ingresa tu nueva immagen' onChange={(e)=> setNuevaImagen(e.target.files[0])}></input>

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