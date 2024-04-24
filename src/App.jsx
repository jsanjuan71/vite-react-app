import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/contador'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Contacto from './components/pages/contacto'
import Nosotros from './components/pages/nosotros'
import Productos from './components/pages/productos'
import NotFound from './components/pages/notfound'
import ProductoDetalle from './components/ProductoDetalle'
import DetalleProducto from './components/detalleProducto'
import ListaDeTareas from './components/listaDeTareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contacto' element={ <Contacto /> } />
        <Route path='/nosotros' element={ <Nosotros /> } />
        <Route path='/productos' element={ <Productos /> } />
        <Route path='/productos/:sku' element={ <DetalleProducto /> } />
        <Route path='/lista' element={ <ListaDeTareas /> } />
        
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
