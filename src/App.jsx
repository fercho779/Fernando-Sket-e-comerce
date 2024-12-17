import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContex';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className='mainProject'>
        <NavbarComponent/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Sket'/>} />
          <Route path='/productos/:category' element = {<ItemListContainer greeting= 'Categoria: '/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout'element={<Checkout/>}/>
        </Routes>
      </div>
    </BrowserRouter> 
    </CartProvider>
  )
}

export default App
