import Menu from '../menu';
import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TarjetaProducto from '../tarjetaProducto';
import CarritoContext from '../../tools/carrito.context';
import axios from 'axios';

function Catalogo({ ...props }) {
    const [listaProductos, setListaProductos] = useState([]);

    //const carrito = useLocalStorage2([], "carrito")
    const carrito = useContext(CarritoContext);

    useEffect(function () {
        axios.get(process.env.REACT_APP_BACKEND_URL)
            .then(response => {
                console.log("EXITO", response)
                setListaProductos(response.data);
            })
            .catch(error => {
                console.error( "FALLA", error )
            })
        /*fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                console.log('DATA', data);
                setListaProductos(data.products);
            }); */
    }, []);

    return (
        <Container>
            <Menu />
            <h1>Bienvenido al Catálogo</h1>
            <Row>
                {listaProductos.map((producto, indice) => {
                    return (
                        <Col key={indice} xxl={3} lg={4} md={6} xs={12} className="d-flex mb-3">
                            <TarjetaProducto
                                producto={producto}
                                className="h-100"
                                clickAgregar={carrito.agregar}
                            />
                            <Button onClick={carrito.eliminar}>
                            </Button>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Catalogo;
