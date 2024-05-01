import Menu from "../menu"
import './productos.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import TarjetaProducto from "../tarjetaProducto"
import { Row, Col, Container } from "react-bootstrap"

function ProductosBs() {
    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data.products)
                setListaProductos(data.products)
            })
    }, [])
    return (
        <Container>
            <Menu />
            <h1>Productos</h1>
            
            <Row>
                {
                    listaProductos.map((producto, index) => {
                        return (
                            <Col key={index} xxl={3} lg={4} md={6} xs={12} className="d-flex mb-3" >
                                <TarjetaProducto 
                                    producto={producto}
                                    className="h-100"
                                />
                            </Col>
                        )
                    })
                }
            </Row>
            
        </Container>
    )
}

export default ProductosBs