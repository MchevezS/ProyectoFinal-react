
// Metodo post: Guarda los datos.
async function postUsers(userData, usuarioNuevo, userProducts, endpoint) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData, usuarioNuevo, userProducts)
        });
        const data = await response.json()
        // console.log(data);
        return data
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}
export{postUsers}


// Metodo post: Guarda los datos.
async function postProducts(obj, endpoint) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}
export{postProducts}


//Metodo Get: Obtiene informacio
async function getUsers(endpoint) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}`)
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const data = await response.json()
        return data;
    } catch (error) {
        // console.error('Error fetching users:', error);
        throw error;
    }
}
export { getUsers};

// Metodo Put: Actualiza datos
async function updateUsers(producto, endpoint, id) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto) 
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el producto');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error;
    }
}


export{updateUsers}


// Metodo Delete: Elimina datos.
async function EliminarUsuario(endpoint, id) {
    try {
        const response = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { EliminarUsuario };