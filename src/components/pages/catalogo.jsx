import Menu from "../menu"
import { useEffect, useState   } from "react"
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import TarjetaProducto from "../tarjetaProducto"

function Catalogo() {
    const [listaProductos, setListaProductos] = useState([])


    useEffect( function(){
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                console.log("DATA", data)
                setListaProductos( data.products )
            })
    }, [] )

    return (
        <Container>
            <Menu />
            <h1>Bienvenido al Catálogo</h1>
            <Row>           
            {
                listaProductos.map((producto, indice) => {
                    return(
                        <Col key={indice} xxl={3} lg={4} md={6} xs={12} className="d-flex mb-3">
                            <TarjetaProducto producto={producto} className="h-100" />
                        </Col>
                    )
                })
            }
            </Row>
            
        </Container>
    )
}

export default Catalogo