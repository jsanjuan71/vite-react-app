import Menu from "../menu"
import { useEffect, useState   } from "react"
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

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
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={producto.thumbnail} />
                                <Card.Body>
                                <Card.Title>
                                    {producto.title}
                                    <br/>
                                    <sub className="text-muted">{producto.brand}</sub>
                                </Card.Title>
                                <Card.Text>{producto.description}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
            
        </Container>
    )
}

export default Catalogo