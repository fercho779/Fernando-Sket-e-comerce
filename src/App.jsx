import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
    <div className='mainProject'>
        <NavbarComponent/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Sket'/>} />
          <Route path='/productos/:category' element = {<ItemListContainer greeting= 'Categoria: '/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        
      </div>
    </BrowserRouter> 
  )
}

export default App
