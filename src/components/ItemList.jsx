import React from "react";
import Item from "./Item";
const ItemList = ({products}) =>{
    return(
        <div className="itemListContainer" >
            {products.map((products) => <Item products = {products} key={products.id}/> )}
        </div>
    )
}
export default ItemList