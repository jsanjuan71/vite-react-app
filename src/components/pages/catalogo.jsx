import Menu from '../menu';
import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TarjetaProducto from '../tarjetaProducto';
import CarritoContext from '../../tools/carrito.context';
import axios from 'axios';
import CrearProductoModal from '../crearProductoModal';
import AuthContext from '../../tools/auth.context';

function Catalogo({ ...props }) {
    const [listaProductos, setListaProductos] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const carrito = useContext(CarritoContext);
    const authCtx = useContext( AuthContext )

    useEffect(function () {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + authCtx.auth.token,
            }
        }
        axios.get(process.env.REACT_APP_BACKEND_URL + '/productos', config)
            .then(response => {
                console.log("EXITO", response)
                setListaProductos(response.data);
            })
            .catch(error => {
                console.error( "FALLA", error )
            })
    }, []);

    const guardarProducto = (formProducto) => {
        // cuando se envia un archivo se debe enviar un objeto FormData
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        // axios.post(url, datos, configuracion)
        axios.post(process.env.REACT_APP_BACKEND_URL + "/productos", formProducto, config)
            .then(response => {
                // Si la petición fue exitosa, se actualiza la lista de productos y se cierra el modal
                setModalShow(false);
                setListaProductos(response.data);
            })
            .catch(error => {
                // Si la petición falla, se muestra un mensaje en la consola
                // falta mostrar un mensaje al usuario
                console.error( "FALLA", error )
            })
    }

    return (
        <Container>
            <Menu />
            <h1>Bienvenido al Catálogo</h1>
            {/** Se agrega el modal para crear el producto */}
            <CrearProductoModal show={modalShow} 
                onHide={() => setModalShow(false)} 
                onSave={guardarProducto}
            />
            <Row>
                <Col>
                    <Button className='btn btn-primary' onClick={()=> setModalShow(true)}>Crear producto</Button>
                </Col>
            </Row>
            <hr />
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
