import { Link } from "react-router-dom";

function Login() {
    return (
      <div>
        <h1>Login</h1>

        <hr />
        <p>¿No tiene una cuenta? <Link to={"/register"}>Registrarse</Link></p>
      </div>
    );
}

export default Login;