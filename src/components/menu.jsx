import { Link, useNavigate } from 'react-router-dom';
import './menu.css';
import { Cart } from 'react-bootstrap-icons';
import { useContext, useEffect, useState } from 'react';
import CarritoContext from '../tools/carrito.context';
import { Badge, Col, Dropdown, Row } from 'react-bootstrap';
import AuthContext from '../tools/auth.context';
import axios from 'axios';
import { toast } from 'react-toastify';


function Menu(props) {
    const ctx = useContext( CarritoContext )
    const authCtx = useContext( AuthContext )
    const [user, setUser] = useState(null)
    const redirect = useNavigate()

    const logout = () => {
        authCtx.reset()
        toast.info("Sesión cerrada")
        setTimeout(redirect, 2000, '/home')
    }

    useEffect(() => {
        // Si no hay token, no se hace la petición
        if(!authCtx.auth.token) return 

        // Configuración de la petición con el token
        const config = {
            headers: {
                'Authorization': 'Bearer ' + authCtx.auth.token,
            }
        }

        // llamamos al sevvicio de usuarios/perfil
        axios.get(process.env.REACT_APP_BACKEND_URL + '/usuarios/perfil', config )
            .then(response => {
                console.log("EXITO", response.data)
                setUser(response.data.result)
                console.log("Usuario", response.data.result)
            })
    }, [authCtx.auth.token])
    // cada vez que cambie el token se ejecuta el efecto

    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
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

                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {user ? user.nombre : "..."}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.ItemText>
                                <Row>
                                    <Col>
                                        <img src="https://via.placeholder.com/128" alt="avatar" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {user ? user.correo : "..."}
                                    </Col>  
                                </Row>
                                <Row>
                                    <Col>
                                        {user ? user.rol : "..."}
                                    </Col>  
                                </Row>
                            </Dropdown.ItemText>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Salir</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
