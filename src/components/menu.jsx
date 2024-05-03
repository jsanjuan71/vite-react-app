import {Link} from 'react-router-dom';
import './menu.css'
import { Cart } from 'react-bootstrap-icons';

function Menu() {

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
                    <Link to={"/carrito"}>Carrito<Cart/></Link>
                </li>

                <li>
                    <Link to={"/contacto"}>Contactanos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;