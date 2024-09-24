import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/Llamados'; 

function BarraDeBusqueda() {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [productos, setProductos] = useState([]); // Estado para la lista de productos

  // Efecto para obtener la lista de productos al montar el componente
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const listaProductos = await getUsers("products");
        setProductos(listaProductos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
       
      }
    };
    obtenerProductos();
  }, []); // El array vacío asegura que solo se ejecute 

  // Filtrar productos según búsqueda y categoría
  const productosFiltrados = productos.filter(producto => {
    const coincideConBusqueda = producto.nombreProducto;
    const coincideConCategoria = categoriaSeleccionada === '' || producto.categoria === categoriaSeleccionada;
    return coincideConBusqueda && coincideConCategoria;
  });

  return (
    <div>
      <input
        type='search'
        placeholder='Buscar...'
        value={terminoDeBusqueda}
        onChange={e => setTerminoDeBusqueda(e.target.value)}
      />

      <select onChange={e => setCategoriaSeleccionada(e.target.value)} value={categoriaSeleccionada}>
        <option value="">Todas las categorías</option>
        <option value="zapatos">Tapiz</option>
        <option value="camisas">Cartera de mano</option>
        <option value="pantalones">Bolsos</option>
        <option value="accesorios">Accesorios</option>
        <option value="chaquetas">Cuadros</option>
      </select>

      <ul>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, index) => (
            <li key={index}>{producto.nombreProducto}</li>
          ))
        ) : (
          <li>No se encontraron productos.</li>
        )}
      </ul>
    </div>
  );
}

export default BarraDeBusqueda;
