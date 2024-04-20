import { useParams } from 'react-router-dom' //HOOK
import Menu from './menu'


const detalleProducto = {
    huevo: {
        sku: 'huevo',
        nombre: 'Huevo',
        descripcion: "Huevo blanco de gallina",
        precio: 10
    },
    leche: {
        sku: 'leche',
        nombre: 'Leche Santa Clara',
        descripcion: "leche entera 1L Santa Clara",
        precio: 20
    },
}

function DetalleProducto() {
    const {sku} = useParams()
    const producto = detalleProducto[sku]
    return (
        <>
            <Menu />
            <h1>Detalle del producto</h1>
            <p>Este es el detalle del producto {producto.sku}</p>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
        </>
    )
}

export default DetalleProducto;