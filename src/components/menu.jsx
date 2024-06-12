import {Link} from 'react-router-dom';
import './menu.css'
import { Cart } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CarritoContext from '../tools/carrito.context';
import { Badge } from 'react-bootstrap';


function Menu() {

    const ctx = useContext(CarritoContext)

    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/nosotros"}>Nosotros</Link>
                </li>

                <li>
                    <Link to={"/catalogo"}>Tienda</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>
                        <Badge><Cart/> {ctx.productos.length}</Badge>
                    </Link>
                </li>

                <li>
                    <Link to={"/contacto"}>Contactanos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;