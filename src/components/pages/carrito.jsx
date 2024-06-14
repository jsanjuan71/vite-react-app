import Menu from '../menu';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useLocalStorage2 from '../../hooks/useLocalStorage2';

function Carrito() {
    // se obtiene el carrito del local storage usando el hook useLocalStorage2
    const storageCarrito = useLocalStorage2([], 'carrito', 'carrito');

    // se define el carrito como un objeto vacio porque aun no hay productos
    const [carrito, setCarrito] = useState({});

    useEffect(
        function () {
            // crear un objeto con la estructura del carrito
            const currentCarrito = {
                total: storageCarrito.almacenamiento.length, // total de productos
                costo: storageCarrito.almacenamiento.reduce((acc, item) => acc + item.price, 0), // costo total
                productos: [], // lista de productos
            };
            storageCarrito.almacenamiento.map((item) => {
                // obtener los ids existentes en el carrito
                let idsAgregados = currentCarrito.productos.map((item) => item.producto.id);
                // si el id no existe en el carrito, agregarlo como nuevo producto
                if (idsAgregados.indexOf(item.id) === -1) {
                    currentCarrito.productos.push({
                        cantidad: 1, // si no existe, la cantidad es 1
                        producto: item, // el producto es el item
                    });
                } else {
                    // evitar duplicados
                    // si el id ya existe, incrementar la cantidad
                    currentCarrito.productos.map((producto) => {
                        // si el id del producto es igual al id del item
                        if (producto.producto.id === item.id) {
                            producto.cantidad++; // incrementar la cantidad
                        }
                    });
                }
            });
            setCarrito(currentCarrito); // actualizar el estado del carrito
        },
        [storageCarrito.almacenamiento]
    ); // ejecutar cada vez que cambie el carrito

    return (
        <Container>
            <Menu />
            <h1>Bienvenido al Carrito</h1>
            {/** Se definen los ancabezados de la lista */}
            <Row>
                <Col md={2}>Imagen</Col>
                <Col md={4}>Producto</Col>
                <Col md={2}>Cantidad</Col>
                <Col md={2}>Precio</Col>
                <Col md={2}>Total</Col>
            </Row>
            {
                // se recorre la lista de productos del carrito
                // el ? es para evitar errores si no hay productos
                carrito.productos?.map((itemCarrito, indice) => {
                    return (
                        <Row key={indice} className="d-flex mb-3">
                            {/* Se definen las columnas de la lista por cada producto del carrito */}
                            <Col md={2}>
                                <img src={itemCarrito.producto.thumbnail} width={'100%'} />
                            </Col>
                            <Col md={4}>{itemCarrito.producto.title}</Col>
                            <Col md={2}>{itemCarrito.cantidad}</Col>
                            <Col md={2}>${itemCarrito.producto.price}</Col>
                            <Col md={2}>
                                ${Number(itemCarrito.producto.price) * itemCarrito.cantidad}
                            </Col>
                        </Row>
                    );
                })
            }
            <hr />
            {/** Se muestran los totales del carrito */}
            <Row>
                <Col>Total de Productos: {carrito.total}</Col>
            </Row>
            <Row>
                <Col>Impuestos: ${carrito.costo * 0.16}</Col>
            </Row>
            <Row>
                <Col>Total a Pagar: ${carrito.costo * 1.16}</Col>
            </Row>
        </Container>
    );
}

export default Carrito;
