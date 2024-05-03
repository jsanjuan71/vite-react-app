import {Button, Card} from 'react-bootstrap'

function TarjetaProducto({producto, ...props}) {
  return (
    <Card className="d-flex flex-column">
      <Card.Img variant="top" src={producto.thumbnail} />
      <Card.Body className="flex-grow-1">
        <Card.Title>{producto.title}<br/><sub className='text-muted'>{producto.brand}</sub></Card.Title>
        <Card.Text>{producto.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
            <label className="text-success"> ${producto.price}</label>
            <br/>
            <Button variant="primary" onClick={ ()=> props.clickAgregar(producto) }>Agregar</Button>
        </Card.Footer>
    </Card>
  );
}

export default TarjetaProducto;