import React from 'react';
import '../style/Destacados.css'
import { useState } from 'react';

function Destacados() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
      setCarrito([...carrito, producto]);
      // Aquí podrías agregar la lógica para guardar en localStorage si lo necesitas
      localStorage.setItem('carrito', JSON.stringify([...carrito, producto]));
  };

  const productos = [
      { id: 1, nombre: 'Colgantes para plantas', precio: 6000, imagen: 'src/img/colgante de plantas.png' },
      { id: 2, nombre: 'Aretes', precio: 3000, imagen: 'src/img/aretes 2.png' },
      { id: 3, nombre: 'Tapiz grande 150cm x90cm', precio: 80000, imagen: 'src/img/tapiz.png' },
  ];
    return (
      <div className="destacados">
      <h2>Los más vendidos</h2>
      <div className="productos">
          {productos.map(producto => (
              <div key={producto.id} className="producto">
                  <img className="imagen-producto" src={producto.imagen} alt={producto.nombre} />
                  <p>{producto.nombre}</p>
                  <p>₡{producto.precio}</p>
                  <button className="btn-agregar" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
              </div>
          ))}
      </div>
  </div>
    );
}

export default Destacados;
