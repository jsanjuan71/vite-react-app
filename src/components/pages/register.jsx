import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_SERVER, USUARIOS_PATH } from "../../constants/api-endpoints";
import messages from "../../constants/messages-es";

function Register() {
    const redirect = useNavigate();
    const formulario = useRef();

    const handleSubmit = (event) => {
      // Evitar que el formulario recargue la página
      event.preventDefault()
      // Crear un objeto FormData con los datos del formulario,
      // que se obtienen a través de formulario.current
      // es totalmente dinamico porque no se necesita saber cuantos campos tiene el formulario
      const formData = new FormData(formulario.current);
      // entries devuelve un iterador de los pares [clave, valor] de un objeto
      formData.entries().forEach(entry => {
        console.log(entry)
      })

      // Crear un objeto a partir de los pares [clave, valor] del formulario
      const data = Object.fromEntries(formData.entries())
       /*{
        nombre: "Julio Sanjuan",
        correo: "sahjœlive.com",
        contrasena: "123456"
      }*/

      // Invocamos a la API para guardar el usuario con data como cuerpo de la petición
      axios.post( API_SERVER + USUARIOS_PATH, data)
        .then(response => {
          console.log("EXITO", response.data)
          // Mostrar un mensaje al usuario de que el registro fue exitoso
          toast.success("Usuario registrado con éxito")
          // Si la petición fue exitosa, se redirige al usuario a la página de login después de 5 segundos
          setTimeout(redirect, 5000, '/')
        })
        .catch(error => {
          console.error( "FALLA", error.response.data )
          // Mostrar un mensaje al usuario de que el registro falló
          toast.error("No se pudo registrar el usuario, intente de nuevo")
        })
    }

    return (
      <div>
        <h1>{ messages.register.title }</h1>
        <Form ref={formulario} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>{ messages.register.form.name }</Form.Label>
            <Form.Control type="text" placeholder="Teclea tu nombre" name="nombre" minLength={5} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>{ messages.register.form.email }</Form.Label>
            <Form.Control type="email" placeholder="Teclea tu correo" name="correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>{ messages.register.form.password }</Form.Label>
            <Form.Control type="password" placeholder="Teclea tu correo" name="contrasena" />
          </Form.Group>

          <Button type="submit" variant="success">{ messages.register.form.submit }</Button>
        </Form>
        <hr />
        <p>{ messages.register.already } <Link to={"/"}>{ messages.login.title }</Link></p>
      </div>
    );
}

export default Register;