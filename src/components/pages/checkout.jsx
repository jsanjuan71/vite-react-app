import { useContext } from "react"
import Menu from "../menu"
import CarritoContext from "../../tools/carrito.context"
import PayPalButton from "../PayPalButton"


function Checkout() {
    const carrito = useContext( CarritoContext )
    const total = carrito.productos.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    const impuestos = (total * 0.16).toFixed(2)
    const totalConImpuestos = (parseFloat(total) + parseFloat(impuestos)).toFixed(2)

    return (
        <>
            <Menu />
            <h1>Checkout</h1>
            <p>Total a pagar: ${totalConImpuestos}</p>

            <PayPalButton amount={totalConImpuestos} />
        </>
    )
}

export default Checkout