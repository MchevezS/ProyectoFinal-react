import React, { useEffect, useState } from 'react';
import '../style/ProductosAgregadosForm.css';
import FormularioProductos from './FormularioProductos';
import { getUsers } from '../services/Llamados';
import { Link } from 'react-router-dom';
import EditarProductos from './EditarProductos';


function ProductosAgregadosForm() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const mostrarProductos = async () => {
            const peticion = await getUsers("products");
            setProductos(peticion);
        };
        mostrarProductos();
    }, []);

    return (
        <div className='contenedorListaP'>
        <h1 className='recientemente'>Productos Agregados Recientemente</h1>
        <ul className='listaProducts'>
            {productos.map((producto, index) => (
                <li key={index}>
                    {producto.imagenBase64 && (
                        <img src={producto.imagenBase64} alt={producto.nombreProducto} />
                    )}
                    <div>
                        {producto.nombreProducto} - {producto.precio} - {producto.descripcion}
                    </div>
                    <Link to={`/editar/${producto.id}`}>Editar</Link> {/* Botón de edición */}
                </li>
            ))}
        </ul>
        <Link to={"/Principal"} className='linkAtras'>Atrás</Link>
    </div>
    );
}

export default ProductosAgregadosForm;