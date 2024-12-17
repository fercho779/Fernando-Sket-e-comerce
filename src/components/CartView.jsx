import { useCart } from '../context/CartContex'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

const CartView = () => {
    const {cart} = useCart()
    return (
        <div>
            {!cart.length
            ?<EmptyCart/>
            :<div>
                <h2> Tu carrito:</h2>
                <CartList/>
            </div>}
        </div>
    )
}

export default CartView
