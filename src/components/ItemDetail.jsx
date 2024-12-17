import React, { useContext, useState } from "react"
import Item from "./Item"
import ItemCount from "./ItemCount"
import { use } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContex"
const ItemDetail = ({products}) =>{
    const [compra, setCompra] = useState(false)
    const {addToCart} = useContext(CartContext)
    const onAdd = (cantidad) =>
        {
            setCompra(true)
            addToCart(products, cantidad)
        }
    return(
        <div className="itemDesingDetail">
            <h1 className="card-title" >Detalle del Producto: {products.name}</h1>
            <img className="card-img-top" src={products.img} alt = {products.img}/>
            <p className="card-text" >Descripcion: {products.descripcion}</p>
            <p>Precio: ${products.price}</p>
            {compra 
            ?   <div>
                <Link className="btn btn-dark" to='/'> Seguir comprando </Link> 
                <Link className="btn btn-dark"to='/cart' >Ir al Carrito</Link>
                </div> 
            : <ItemCount stock={products.stock} onAdd={onAdd}/>}
        </div>
    )
}
export default ItemDetail