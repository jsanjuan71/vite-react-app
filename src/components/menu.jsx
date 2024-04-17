import {Link} from 'react-router-dom';

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
                    <Link to={"/productos"}>Tienda</Link>
                </li>

                <li>
                    <Link to={"/contacto"}>Contactanos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;