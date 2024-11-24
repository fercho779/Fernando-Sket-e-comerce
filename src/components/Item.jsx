import React from "react";
import { Link } from "react-router-dom";
const Item = ({products}) =>{
    return(
        <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src= {products.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <p className="card-text">precio: ${products.price}</p>
                <Link className="btn btn-primary" to={`/item/${products.id}`}>ver mas</Link>
            </div>
        </div>
    )
}
export default Item;