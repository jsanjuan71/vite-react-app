import { Link, useNavigate } from 'react-router-dom';
import Menu from '../menu';
import { useContext, useEffect } from 'react';
import AuthContext from '../../tools/auth.context';

function Home(props) {
    const authCtx = useContext( AuthContext )
    const navigate = useNavigate()

    useEffect(() => {
        if( authCtx.auth.token === null ) {
            navigate("/")
        }
    } , [authCtx.auth.token])

    return (
        <>
            <Menu carrito={props.carrito} />
            <h1>Home Page</h1>
        </>
    );
}

export default Home;
