import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div style={{height:'100vh'}}>
            <h2>El Carrito esta Vacio</h2>
            <h4>Te invitamos a que veas nuestras remeras</h4>
            <Link to='/' className='btn btn-dark'>Ir a la tienda</Link>
        </div>
    )
}

export default EmptyCart
