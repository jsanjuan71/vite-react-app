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
import DetalleTarea from './components/detalleTarea'
import ListaTareas from './components/listaTareas'
import ProductosBs from './components/pages/productosBootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalogo from './components/pages/catalogo'
import Carrito from './components/pages/carrito'

import CarritoState from './tools/carrito.state'


function App() 
{
  return (
    <CarritoState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contacto' element={ <Contacto /> } />
          <Route path='/nosotros' element={ <Nosotros /> } />
          <Route path='/productos' element={ <ProductosBs /> } />
          <Route path='/productos/:sku' element={ <DetalleProducto /> } />
          <Route path='/lista' element={ <ListaDeTareas /> } />
          <Route path='/lista/:id' element={ <DetalleTarea /> } />
          <Route path='/tareas' element={ <ListaTareas /> } />
          <Route path='/catalogo' element={ <Catalogo /> } />
          <Route path='/carrito' element={ <Carrito /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </CarritoState>
  )
}

export default App
