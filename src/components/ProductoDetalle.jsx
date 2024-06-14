import Menu from './menu';
import { useParams } from 'react-router-dom';

function ProductoDetalle() {
    // obtener el id del producto
    const { id } = useParams();

    return (
        <>
            <Menu />
            <h1>Producto {id}</h1>
        </>
    );
}

export default ProductoDetalle;
