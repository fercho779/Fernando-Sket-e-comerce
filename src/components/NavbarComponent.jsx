import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink  className='aLink' to='/'>Sket</NavLink>
            <NavLink  className='aLink' to='/productos/Nuevos'>Nuevos</NavLink>
            <NavLink  className='aLink' to='/productos/Oferta'>Ofertas</NavLink>
            <NavLink  className='aLink' to='/productos/Mas Vendidos'>Mas Vendidos</NavLink>
            <NavLink  className='aLink' to='/formulario'>Formulario</NavLink>
            <NavLink  className='aLink' to='/iniciar sesion'>Iniciar Sesion</NavLink>
            <NavLink  className='aLink' to='/cart'><CartWidget/></NavLink>
        </nav>
    )
}
export default NavbarComponent