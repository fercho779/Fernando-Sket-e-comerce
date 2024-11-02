import CartWidget from './CartWidget'
const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <a href='#' className='aLink'>Sket</a>
            <a href='#' className='aLink'>Tienda</a>
            <a href='#' className='aLink'>Formulario</a>
            <a href='#' className='aLink'>Iniciar Sesion</a>
            <CartWidget/>
        </nav>
    )
}
export default NavbarComponent