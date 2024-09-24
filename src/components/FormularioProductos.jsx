import React, { useState } from 'react';
import { getUsers, postProducts } from '../services/Llamados';
import '../style/FormularioProducto.css';
import { mostrarAlerta } from './MostraAlerta';
import { useNavigate } from 'react-router-dom';

function FormularioProductos() {
  const [producto, setProducto] = useState('');
  const [img, setImg] = useState(''); // Estado para la imagen en Base 64
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0]; // Cambiado a e.target.files[0]
    const reader = new FileReader();
    if (file) {
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const agregarProducto = async () => {
    const productoAgregar = {
      nombreProducto: producto,
      imagenProducto: img, 
      descripcion: descripcion,
      precio: precio
    };
    await postProducts(productoAgregar, "products");
  };
  
  const validarProductos = async (e) => {
    e.preventDefault(); // Previene el envío por defecto del formulario

    if (producto.trim() === "" || descripcion.trim() === "" || precio.trim() === "") {
      mostrarAlerta("error", "Llenar campos vacíos");
      return;
    }

    try {
      // Continuar validación sin volver a leer la imagen
      await continuarValidacion();
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      mostrarAlerta("error", "Error al procesar la solicitud. Inténtalo de nuevo.");
    }
  };

  const continuarValidacion = async () => {
    let productos = await getUsers("products");
    let productoExiste = productos.find(prod => prod.nombreProducto === producto && prod.precio === precio);

    if (productoExiste) {
      mostrarAlerta("error", 'Ya existe un producto con el mismo nombre y precio');
    } else {
      await agregarProducto(); // Aquí se llama a agregarProducto
      mostrarAlerta('success', "Tus productos se han guardado exitosamente");
      // Limpiar campos después de un envío exitoso
      setProducto('');
      setImg(''); // Limpiar el estado de la imagen Base 64
      setDescripcion('');
      setPrecio('');
      navigate('/productosAgregadosForm');
    }
  };

  return (
    <div>
      <form onSubmit={validarProductos}>
        <h1 className='aTitulo'>Agregar Productos</h1>
        <label className='nombreProducto1'>Nombre del Producto</label>
        <input
          className='nombreProducto2'
          type='text'
          value={producto}
          placeholder='Ingresa el nombre del producto'
          onChange={(e) => setProducto(e.target.value)}
        />

        <label className='productoImagen'>Imagen del producto</label>
        <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage}/>
        
        <label className='aProducto'>Agrega Descripción</label>
        <input
          type='text'
          className='descripcion'
          value={descripcion}
          placeholder='Ingresa una descripción'
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <label className='aPrecio'>Agrega un Precio</label>
        <input
          type='number'
          className='precio'
          value={precio}
          placeholder='Ingresa el precio del producto'
          onChange={(e) => setPrecio(e.target.value)}
        />

        <button type='submit' className='btnAgregar btn-success'>Agregar Productos</button>
      </form>
    </div>
  );
}

export default FormularioProductos;
