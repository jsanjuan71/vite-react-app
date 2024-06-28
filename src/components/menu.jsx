import { Link } from 'react-router-dom';
import './menu.css';
import { Cart } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CarritoContext from '../tools/carrito.context';
import { Badge } from 'react-bootstrap';
import AuthContext from '../tools/auth.context';

function Menu(props) {
    const ctx = useContext( CarritoContext )
    const authCtx = useContext( AuthContext )

    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>

                <li>
                    <Link to={'/nosotros'}>Nosotros</Link>
                </li>

                <li>
                    <Link to={'/catalogo'}>Tienda</Link>
                </li>
                <li>
                    <Link to={'/carrito'}>
                        <Badge>
                            <Cart /> {ctx.productos.length}
                        </Badge>
                    </Link>
                </li>

                <li>
                    <Link to="/checkout">Pagar</Link>
                </li>

                <li>
                    <Link to={'/contacto'}>Contactanos</Link>
                </li>
                <li onClick={ () => authCtx.set({token: null}) }>
                    <Link to={"/"} >Salir</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
