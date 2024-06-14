import Menu from '../menu';
import imgHuevo from '../../assets/huevo.jpeg';
import imgLeche from '../../assets/leche.png';
import './productos.css';
import { Link } from 'react-router-dom';

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 99 },
    { id: 3, nombre: 'Producto 3', precio: 499 },
    { id: 4, nombre: 'Producto 4', precio: 125 },
];

function Productos() {
    return (
        <>
            <Menu />
            <h1>Productos</h1>
            <div className="fila_productos">
                <figure>
                    <img src={imgHuevo} width={'192px'} />
                    <figcaption>
                        <h2>Producto 1</h2>
                        <p>$100</p>
                        <Link to={'/productos/huevo'}> Ver detalle </Link>
                    </figcaption>
                </figure>

                <figure>
                    <img src={imgLeche} width={'192px'} />
                    <figcaption>
                        <h2>Producto 2</h2>
                        <p>$100</p>
                        <Link to={'/productos/leche'}> Ver detalle </Link>
                    </figcaption>
                </figure>
            </div>
        </>
    );
}

export default Productos;
