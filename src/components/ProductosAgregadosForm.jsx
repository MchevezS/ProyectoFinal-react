import React, { useEffect, useState } from 'react';
import '../style/ProductosAgregadosForm.css';
import { getUsers, updateUsers } from '../services/Llamados';
import { Link } from 'react-router-dom';

function ProductosAgregadosForm() {
    const [productos, setProductos] = useState([]);
    const [productoAEditar, setProductoAEditar] = useState(null); 

    useEffect(() => {
        const mostrarProductos = async () => {
            const peticion = await getUsers("products");
            setProductos(peticion);
        };
        mostrarProductos();
    }, []);

    const manejarEditar = (producto) => {
        setProductoAEditar(producto); 
    };

    const manejarCancelar = () => {
        setProductoAEditar(null); 
    };

    const actualizarProducto = async (e) => {
        e.preventDefault();

        try {
            await updateUsers(productoAEditar, 'products', productoAEditar.id); 
            const updatedProducts = productos.map((prod) => 
                prod.id === productoAEditar.id ? productoAEditar : prod
            );
            setProductos(updatedProducts);
            setProductoAEditar(null); 
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <div className='contenedorListaP'>
            <h1 className='recientemente'>Productos Agregados Recientemente</h1>

            {productoAEditar ? (
                <form onSubmit={actualizarProducto} className='formularioEditar'>
                    <h2>Editar Producto</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={productoAEditar.nombreProducto}
                            onChange={(e) => setProductoAEditar({ ...productoAEditar, nombreProducto: e.target.value })}
                        />
                    </label>
                    <label>
                        Precio:
                        <input
                            type="number"
                            value={productoAEditar.precio}
                            onChange={(e) => setProductoAEditar({ ...productoAEditar, precio: e.target.value })}
                        />
                    </label>
                    <label>
                        Descripción:
                        <textarea
                            value={productoAEditar.descripcion}
                            onChange={(e) => setProductoAEditar({ ...productoAEditar, descripcion: e.target.value })}
                        />
                    </label>
                    <button type="submit">Actualizar</button>
                    <button type="button" onClick={manejarCancelar}>Cancelar</button>
                </form>
            ) : (
                <ul className='listaProducts'>
                    {productos.map((producto, index) => (
                        <li key={index}>
                            <img src={producto.imagenProducto} alt={producto.nombreProducto} />
                            <div>
                                {producto.nombreProducto} - {producto.precio} - {producto.descripcion}
                            </div>
                            <button onClick={() => manejarEditar(producto)}>Editar</button> {/* Botón de edición */}
                        </li>
                    ))}
                </ul>
            )}
            <Link to={"/Principal"} className='linkAtras'>Atrás</Link>
            <Link to={"/FormularioProductos"} className='linkAtras'>Agregar nuevos productos</Link>
        </div>
    );
}

export default ProductosAgregadosForm;
