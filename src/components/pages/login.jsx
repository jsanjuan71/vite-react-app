import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../tools/auth.context";

function Login() {
    const formulario = useRef();

    const authCtx = useContext( AuthContext )

    const redirect = useNavigate();

    const handleSubmit = (event) => {
        // Evitar que el formulario recargue la página
        event.preventDefault()
        // Crear un objeto FormData con los datos del formulario,
        // que se obtienen a través de formulario.current
        // es totalmente dinamico porque no se necesita saber cuantos campos tiene el formulario
        const formData = new FormData(formulario.current);
        // Crear un objeto a partir de los pares [clave, valor] del formulario
        const data = Object.fromEntries(formData.entries())

        const body = {
          correo: data.email,
          contrasena: data.password
        }
  
        // Invocamos a la API para guardar el usuario con data como cuerpo de la petición
        axios.post(process.env.REACT_APP_BACKEND_URL + '/usuarios/ingresar', body)
          .then(response => {
            console.log("EXITO", response.data)
            // Mostrar un mensaje al usuario de que el registro fue exitoso
            toast.success("Usuario verificado correctamente")

            authCtx.set( response.data.result )
            // Si la petición fue exitosa, se redirige al usuario a la página de login después de 5 segundos
            setTimeout(redirect, 5000, '/home')
          })
          .catch(error => {
            console.error( "FALLA", error.response.data )
            // Mostrar un mensaje al usuario de que el registro falló
            toast.error( error.response.data.message || error.response.data.result )
          })
    }

    useEffect(() => {
        if (authCtx.auth.token) {
            redirect('/home')
        }
    }, [authCtx.auth.token]);

    return (
      <div>
        <h1>Login</h1>
        <Form ref={formulario} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>INGRESA TU CORREO ELECTRONICO</Form.Label>
                  <Form.Control type="email" name="email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>INGRESA LA CONTRASEÑA</Form.Label>
                <Form.Control type="password" name="password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                INGRESA
            </Button>
        </Form>
        <hr />
        <p>¿No tiene una cuenta? <Link to={"/register"}>Registrarse</Link></p>
      </div>
    );
}

export default Login;