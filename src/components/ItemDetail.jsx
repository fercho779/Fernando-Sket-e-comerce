import React from "react"
import Item from "./Item"
import ItemCount from "./ItemCount"
const ItemDetail = ({products}) =>{
    const onAdd = (cantidad) =>
        {
            alert(`Agregaste al carrito ${cantidad} productos`)
        }
    return(
        <div>
            <h1>Detalle del Producto: {products.name}</h1>
            <img src={products.img} alt = {products.img}/>
            <p>Descripcion: {products.descripcion}</p>
            <p>Precio: ${products.price}</p>
            <ItemCount stock={products.stock} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetail