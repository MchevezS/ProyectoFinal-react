import React from 'react'

function CarritoCompras() {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Cargar productos desde el archivo JSON
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error al cargar productos:', error));
        
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoGuardado);
        calcularTotal(carritoGuardado);
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        calcularTotal(carrito);
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const calcularTotal = (carrito) => {
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        setTotal(total);
    };

  return (
    <div>
           <h1>Tienda</h1>
            <div id="productos">
                {productos.map(producto => (
                    <div key={producto.id} className="producto">
                        <h2>{producto.nombre}</h2>
                        <p>Precio: ${producto.precio}</p>
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>

            <h2>Carrito de Compras</h2>
            <div id="carrito">
                <ul>
                    {carrito.map((item, index) => (
                        <li key={index}>{item.nombre} - ${item.precio}</li>
                    ))}
                </ul>
                <p>Total: ${total}</p>
            </div>
        </div>
   
  )
}

export default CarritoCompras