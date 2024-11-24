import React, { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [products, setProducts] = useState({})
    const {id} = useParams()
    useEffect (() => {
        getOneProduct(id)
        .then((res) => setProducts(res))
        .catch((error) => console.log(error))
    },[])
    return(
        <div>
            <ItemDetail products={products}/>
        </div>
    )
}
export default ItemDetailContainer