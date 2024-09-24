import React, { useEffect, useState } from 'react';
import FormularioProductos from './FormularioProductos';
import { getUsers } from '../services/Llamados';
import { Link } from 'react-router-dom';


function ProductosAgregadosForm() {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const mostrarProductos = async()=>{
            const peticion = await getUsers("products")
            setProductos(peticion)
        }
        mostrarProductos()
    },[])

    return (
        <div>
            <h1>Productos Agregados Recientemente</h1>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>{producto.nombreProducto} - {producto.precio} - {producto.descripcion} - {producto.imagenBase64}</li>
                ))}
            </ul>
            <Link to={"/Principal"}>Atrás</Link>
        </div>
    );
}

export default ProductosAgregadosForm;