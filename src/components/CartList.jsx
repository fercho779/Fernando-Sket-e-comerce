import React from 'react'
import { useCart } from '../context/CartContex'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
  return (
    <div className='cartContainerItem' >
        {cart.map((prod)=> <CartItem key = {prod.id}prod ={prod}/>)}
        <span style={{textTransform:'capitalize', color:'black', fontSize:'2.5rem'}} >Total a pagar: ${cartTotal()} </span>
        <div>
            <button className='btn btn-danger' onClick={clear}>Borrar Carrito</button>
            <Link className='btn btn-success' to='/checkout' >Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default CartList
