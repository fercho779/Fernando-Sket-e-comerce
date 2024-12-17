import React from 'react'
import { useCart } from '../context/CartContex'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
  return (
    <div className='itemDesing'>
        <img src= {prod.img} alt= {prod.name} style={{width:'10 rem'}}/>
        <h2>{prod.name}</h2>
        <span>Cantidad: {prod.cantidad}</span>
        <span>Precio: {prod.price}</span>
        <span>Precio final: ${prod.cantidad * prod.price}</span>
        <button className='btn btn-danger'onClick={()=>removeItem(prod.id)}>x</button>
    </div>
  )
}

export default CartItem
