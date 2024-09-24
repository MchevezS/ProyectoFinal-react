import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, postProducts } from '../services/Llamados';
import { mostrarAlerta } from './MostraAlerta';

function EditarProductos() {
    const [producto, setProducto] = useState(null);
    const [imagenProducto, setImagenProducto] = useState(null);
    const [imagenBase64, setImagenBase64] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();
    const { id } = useParams(); // estoy pasando el ID del producto en la URL

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const productos = await getUsers("products");
                const productoEncontrado = productos.find(prod => prod.id === parseInt(id)); 
                setProducto(productoEncontrado);
                if (productoEncontrado) {
                    setImagenBase64(productoEncontrado.imagenBase64);
                    setDescripcion(productoEncontrado.descripcion);
                    setPrecio(productoEncontrado.precio);
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
                mostrarAlerta("error", "Error al obtener el producto.");
            }
        };
        obtenerProducto();
    }, [id]);

    const actualizarProducto = async (e) => {
        e.preventDefault();
        const productoActualizado = {
            ...producto,
            imagenProducto: imagenBase64,
            descripcion,
            precio
        };

        await postProducts(productoActualizado, "product");
        mostrarAlerta('success', "Producto actualizado exitosamente");
        navigate('/productosAgregadosForm'); 
    };

    if (!producto) return 
    mostrarAlerta("cargando....")

    return (
        <div>
            <h1>Editar Producto</h1>
            <form onSubmit={actualizarProducto}>
                <label>Nombre del Producto</label>
                <input
                    type='text'
                    value={producto.nombreProducto}
                    onChange={(e) => setProducto({ ...producto, nombreProducto: e.target.value })}
                />

                <label>Imagen del producto</label>
                <input
                    type='file'
                    onChange={(e) => {
                        setImagenProducto(e.target.files[0]);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setImagenBase64(reader.result);
                        };
                        reader.readAsDataURL(e.target.files[0]);
                    }}
                />

                <label>Descripción</label>
                <input
                    type='text'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <label>Precio</label>
                <input
                    type='number'
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />

                <button type='submit'>Actualizar Producto</button>
            </form>
        </div>
    );
}

export default EditarProductos;
