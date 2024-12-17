import React,{useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap'
import { getProducts} from '../mock/data'
import ItemList from './ItemList'
import {  useParams } from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'
const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category} = useParams()
    useEffect(()=>{
        setLoading(true)
        const productsCollection = category 
        ? query(collection(db, "productos"), where("category", "==", category)) 
        : collection(db, "productos")
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((product) => {
                return{
                    id: product.id,
                    ...product.data()
                }
            })
        setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])
    return (
        <div className="itemContainer">
            <h1>{greeting}<span style={{textTransform:'capitalize', color:'black'}}>{category}</span></h1>
            {loading ? <Loader/> :<ItemList products= {products}/>}

        </div>
    )
}
export default ItemListContainer