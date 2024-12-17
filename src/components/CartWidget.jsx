import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { useCart } from "../context/CartContex";
const CartWidget = () =>{
    const {cartQuantity} = useCart()
    return (
        <div>
            {cartQuantity() > 0 && <Badge bg="info">{cartQuantity()}</Badge>}
            <FaShoppingCart color="white" fontSize={'1.5rem'}/>
        </div>
    )
}
export default CartWidget