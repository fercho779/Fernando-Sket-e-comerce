import React,{useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap'
import { getProducts } from '../mock/data'
import ItemList from './ItemList'
import {  useParams } from 'react-router-dom'
const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category} = useParams()
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=>{
            if(category){
                setProducts(res.filter((prod)=> prod.category === category ))
            }else{
                setProducts(res)
            }
        })
        .catch(()=> console.log(error))
        .finally(()=> setLoading(false))

    },[category])
    
    return (
        <div className="itemContainer">
            <h1>{greeting}<span style={{textTransform:'capitalize', color:'black'}}>{category}</span></h1>
            {loading ? <p>Cargando...</p>:<ItemList products= {products}/>}

        </div>
    )
}
export default ItemListContainer