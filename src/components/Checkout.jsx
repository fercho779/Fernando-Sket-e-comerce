import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] =useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear} = useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value 
            }
        )
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email || !user.address){
            alert('Los campos son obligatorios')
        }else if(user.email !== validate){
            alert('Los mails deben ser iguales')
        }else{
            let order ={
                comprador: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas,order)
            .then((res)=>{
                cart.forEach((item) => {
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=>console.log(error))
        }
    }
    return (
    <div style={{height:'100vh'}}>
        { orderId !== '' 
        ? <div>
            <h4>Generaste bien tu orden!</h4>
            <h5>El id es: {orderId}</h5>
            <Link to='/' className='btn btn-success'>Volver a la tienda</Link>
        </div>
        : <div>
        <h4>Completa tus datos</h4>
        <form className='DesingForm d-flex flex-column align-items-center'onSubmit={finalizarCompra}>
            <div className='DesignInputForm'>
                <label for="name">Nombre</label>
                <input type="text" id='name' name='name'    placeholder='Ingrese su nombre'onChange={userData}/>
            </div>
            <div className='DesignInputForm'>
                <label for="lastname">Apellido</label>
                <input type="text" id='lastname' name='lastname' placeholder='Ingrese su apellido' onChange={userData}/>
            </div>
            <div className='DesignInputForm'>
                <label for="address">Direccion</label>
                <input type="text" id='address' name='address' placeholder='ingrese su direccion'onChange={userData} />
            </div>
            <div className='DesignInputForm'>
                <label for="email">Email</label>
                <input type="email" name='email' placeholder='Ingrese su correo'onChange={userData}/>
            </div>
            <div className='DesignInputForm'>
                <label for="emailRepeat">Repita el email</label>
                <input type="email" name='email' placeholder='Repita su correo'onChange={(e)=> setValidate(e.target.value)}/>
            </div>
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form>
        </div>}
    </div>
    )
}

export default Checkout
