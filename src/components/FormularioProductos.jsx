import React, { useState } from 'react'
import { getUsers, postProducts, postUsers } from '../services/Llamados';
import { mostrarAlerta } from './MostraAlerta';
import { useNavigate } from 'react-router-dom';

function FormularioProductos({ agregarProducto }) {
  console.log('agregarProducto:', agregarProducto);
    const [producto, setProducto]= useState('');
    const [imagenProducto, setImagenProducto]= useState('');
    const [descripcion, setDescripcion]= useState('');
    const [precio, setPrecio]= useState('');
    const navigate = useNavigate()

  const validarProductos = async()=>{
    if (producto.trim()==="" || descripcion.trim()==="" || precio.trim()==="") {
      mostrarAlerta("error", "Llenar compas vacios")
      return;
    }

    const formData = new FormData();
    formData.append('nombreProducto', producto);
    formData.append('imagenProducto', imagenProducto);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);


    try {
      let productos = await getUsers("products");

      let productoExiste = productos.find(producto => producto.nombreProducto === producto && producto.precio === precio);

    if (productoExiste) {
      mostrarAlerta("error", 'Ya existe un producto con el mismo nombre y precio')
    }
    else{
      await postProducts(formData, "products");
      agregarProducto({ nombreProducto: producto, imagenProducto, descripcion, precio });
      mostrarAlerta('success', "Tus productos se han guardado exitosamente");
      navigate('/productosAgregadosForm');
    }
   } catch (error) {
       console.error('Error al procesar la Solicitud:', error)
   }    

  }

  return (
    <div>
    <form>
        <h1>Agregar Productos</h1>
        <label>Nombre del Producto</label>
        <input className='nombreProducto' type='text' value={producto} placeholder='Ingresa el nombre del producto' onChange={(e)=>setProducto(e.target.value)}/>
    
        <label>Imagen del producto</label>
        <input type='file' className='imagenProducto' placeholder='Ingresa la Imagen de tu Producto' onChange={(e)=>setImagenProducto(e.target.files[0])}/>
    
        <label>Agregar Descripcion</label>
        <input type='text' className='descripcion' value={descripcion} placeholder='Ingresa una descripcion ' onChange={(e)=>setDescripcion(e.target.value)}/>

        <label>Agrega un Precio</label>
        <input type='precio' className='precio' value={precio} placeholder='Ingresa el precio del producto' onChange={(e)=>setPrecio(e.target.value)}/>

        <button type='button' className=' btnAgregar btn-success' onClick={validarProductos}>Agregar Productos</button>
    </form>
      
    </div>
  )
}

export default FormularioProductos