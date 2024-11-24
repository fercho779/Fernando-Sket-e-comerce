import React from "react"
import { useState } from "react"
const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount] = useState(1)
    const sumar = () =>{
        count < stock ? setCount(count + 1):''
    }
    const restar = ()=>{
        count > 0 ? setCount(count - 1):'' 
    }
    const onAddHeandler = () =>{
        if(count > 0 && stock > 0)
        {
            onAdd(count)
        }
        else{
            alert ('No hay stock')
        }
    }
    return (
        <div>
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="btn btn-danger" onClick={sumar}>+</button>
            
        </div>
        <button className="btn btn-primary"onClick={onAddHeandler} >Comprar</button>   
        </div>
        
    )
}
export default ItemCount