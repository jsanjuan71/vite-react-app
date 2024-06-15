import { Link } from 'react-router-dom';
import Menu from '../menu';
import { useContext } from 'react';
import CarritoContext from '../../tools/carrito.context';

function Contacto({ ...props }) {
    const ctx = useContext( CarritoContext )

    console.log( ctx.productos )

    return (
        <>
            <Menu />
            <h1>Contact Page</h1>
        </>
    );
}

export default Contacto;
