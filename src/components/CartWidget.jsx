import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
const CartWidget = () =>{
    return (
        <div>
            <Badge bg="info">7</Badge>
            <FaShoppingCart color="white" fontSize={'1.5rem'}/>
        </div>
    )
}
export default CartWidget