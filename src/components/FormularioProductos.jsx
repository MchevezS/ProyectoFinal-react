import React from 'react'

function FormularioProductos() {


  return (
    <div>
    <form>
        <h1>Agregar Productos</h1>
        <label>Nombre del Producto</label>
        <input className='nombreProducto' type='text' value={producto} placeholder='Ingresa el nombre del producto' onChange={(e)=>setProducto(e.target.value)}/>
    
        <label>Imagen del producto</label>
        <input type='file' className='imagenProducto' value={imagenProducto} placeholder='Ingresa la Imagen de tu Producto' onChange={(e)=>setImagenProducto(e.target.value)}/>
    
        <label>Agregar Descripcion</label>
        <input type='text' className='descripcion' value={descripcion} placeholder='Ingresa una descripcion ' onChange={(e)=>setDescripcion(e.target.value)}/>

        <label>Precio</label>
        <input type=''/>

    </form>
      
    </div>
  )
}

export default FormularioProductos
