import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

function CrearProductoModal({onHide, onSave, ...props }) {
    // Usar un ref en lugar de un state para cada campo del formulario
    // Esto solo debe usarse si los campos se evaluan al enviar el formulario
    const formRef = React.createRef();

    /** La funcion al presionar el boton de submit */
    const handleSubmit = (event) => {
        // Evitar que el formulario recargue la página
        event.preventDefault();
        // Crear un objeto FormData con los datos del formulario
        const formData = new FormData(formRef.current);
        // Llamar a la función onSave con los datos del formulario
        onSave(formData)
        // Limpiar el formulario
        formRef.current.reset()
        // Cerrar el modal
        onHide()
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nuevo producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Datos del producto</h4>
            <Form onSubmit={handleSubmit} ref={formRef}>
                <Form.Group className="mb-3" controlId="titulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del producto" name="titulo" minLength={5} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} name="descripcion" minLength={10} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Precio $" name="precio" min={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="existensia">
                    <Form.Label>Existensia</Form.Label>
                    <Form.Control type="number" placeholder="Unidades en existensia" name="existensia" min={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="portada">
                    <Form.Label>Portada</Form.Label>
                    <Form.Control type="file" accept="image/png, image/jpeg" name="portada"  />
                </Form.Group>
                <Button type="submit" variant="success">Guardar</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CrearProductoModal;