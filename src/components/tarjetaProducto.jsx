import { Button, Card } from 'react-bootstrap';

function TarjetaProducto({ producto, ...props }) {
    return (
        <Card className="d-flex flex-column">
            <Card.Img variant="top" src={producto.portada} />
            <Card.Body className="flex-grow-1">
                <Card.Title>
                    {producto.titulo}
                    <br />
                    <sub className="text-muted">{producto.marca}</sub>
                </Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <label className="text-success"> ${producto.precio}</label>
                <br />
                <Button variant="primary" onClick={() => props.clickAgregar(producto)}>
                    Agregar
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default TarjetaProducto;
