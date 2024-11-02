import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <>
      <div className='mainProject'>
        <NavbarComponent/>
        <ItemListContainer greeting='Bienvenidos a Sket'/>
      </div>
    </>
  )
}

export default App
