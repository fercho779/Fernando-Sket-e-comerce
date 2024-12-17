import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () =>{
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalidItem, setInvalidItem] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        setLoading(true)
        const collectionProd = collection(db, "productos")
        const docRef = doc(collectionProd,id)
        getDoc(docRef)
        .then((res)=>{
        if(res.data()){
            setProducts({id: res.id, ...res.data()})
        }else{
            setInvalidItem(true)
        }
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[])
    if(invalidItem){
        return <div>
            <h3>La remera no existe</h3>
            <Link to='/' className='btn btn-dark'> Volver a la tienda</Link>
        </div>
    }
    
    // useEffect (() => {
    //     getOneProduct(id)
    //     .then((res) => setProducts(res))
    //     .catch((error) => console.log(error))
    // },[])
    return(
        <div className="ItemContainerDetail">
            { loading ? <Loader/> : <ItemDetail products={products}/>}
        </div>
    )
}
export default ItemDetailContainer