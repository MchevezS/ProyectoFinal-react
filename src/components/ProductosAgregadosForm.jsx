import React, { useState } from 'react';
import FormularioProductos from './FormularioProductos';


function productosAgregadosForm() {
    const [productos, setProductos] = useState([]);

    const agregarProducto = (nuevoProducto) => {
        setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
    };

    return (
        <div>
            <h1>Productos</h1>
            <FormularioProductos agregarProducto={agregarProducto} />
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>{producto.nombreProducto} - {producto.precio}</li>
                ))}
            </ul>
        </div>
    );
}

export default productosAgregadosForm;