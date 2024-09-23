import React, { useState } from 'react';
import { getUsers, postProducts } from '../services/Llamados';
import { mostrarAlerta } from './MostraAlerta';
import { useNavigate } from 'react-router-dom';

function FormularioProductos() {
  const [producto, setProducto] = useState('');
  const [imagenProducto, setImagenProducto] = useState(null);
  const [imagenBase64, setImagenBase64] = useState(''); // Estado para la imagen en Base 64
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();

  const agregarProducto = async () => {
    const productoAgregar = {
      nombreProducto: producto,
      imagenProducto: imagenBase64, // Usar imagenBase64 aquí
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

     // Validar imagen
     if (!imagenProducto) {
      mostrarAlerta("error", "Debes seleccionar una imagen del producto");
      return;
    }

    try {
      // Convierte la imagen a Base64
      if (imagenProducto) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = reader.result;
          setImagenBase64(base64); // Guardar la imagen en Base 64

          // Llamo a la función para continuar la validación después de la conversión
          await continuarValidacion();
        };
        reader.readAsDataURL(imagenProducto);
      } else {
        // Si no hay imagen, continuar con la validación
        await continuarValidacion();
      }
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
      setImagenProducto(null);
      setImagenBase64(''); // Limpiar el estado de la imagen Base 64
      setDescripcion('');
      setPrecio('');
      navigate('/productosAgregadosForm');
    }
  };

  return (
    <div>
      <form onSubmit={validarProductos}>
        <h1>Agregar Productos</h1>
        <label>Nombre del Producto</label>
        <input
          className='nombreProducto'
          type='text'
          value={producto}
          placeholder='Ingresa el nombre del producto'
          onChange={(e) => setProducto(e.target.value)}
        />

        <label>Imagen del producto</label>
        <input
          type='file'
          className='imagenProducto'
          onChange={(e) => setImagenProducto(e.target.files[0])}
        />

        <label>Agrega Descripción</label>
        <input
          type='text'
          className='descripcion'
          value={descripcion}
          placeholder='Ingresa una descripción'
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <label>Agrega un Precio</label>
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

