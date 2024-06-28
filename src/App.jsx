import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Contador from './components/contador';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Contacto from './components/pages/contacto';
import Nosotros from './components/pages/nosotros';
import Productos from './components/pages/productos';
import NotFound from './components/pages/notfound';
import ProductoDetalle from './components/ProductoDetalle';
import DetalleProducto from './components/detalleProducto';
import ListaDeTareas from './components/listaDeTareas';
import DetalleTarea from './components/detalleTarea';
import ListaTareas from './components/listaTareas';
import ProductosBs from './components/pages/productosBootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalogo from './components/pages/catalogo';
import Carrito from './components/pages/carrito';

import CarritoState from './tools/carrito.state';
import Checkout from './components/pages/checkout';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Profile from './components/pages/profile';
import Toastify from './components/toastify';
import AuthState from './tools/auth.state';

function App() {
    const cart = useState([])
    return (
        <>
            <Toastify />
            <CarritoState>
                <AuthState>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/contacto" element={<Contacto />} />
                            <Route path="/nosotros" element={<Nosotros />} />
                            <Route path="/productos" element={<ProductosBs />} />
                            <Route path="/productos/:sku" element={<DetalleProducto />} />
                            <Route path="/lista" element={<ListaDeTareas />} />
                            <Route path="/lista/:id" element={<DetalleTarea />} />
                            <Route path="/tareas" element={<ListaTareas />} />
                            <Route path="/catalogo" element={<Catalogo />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route path='/checkout' element={ <Checkout /> } />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </AuthState>
            </CarritoState>
        </>
    );
}

export default App;
