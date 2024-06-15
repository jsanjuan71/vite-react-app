import { useContext } from "react"
import Menu from "../menu"
import CarritoContext from "../../tools/carrito.context"


function Checkout() {

    const carrito = useContext( CarritoContext )

    return (
        <>
            <Menu />
            <h1>Checkout</h1>
            <p>Total a pagar:</p>
        </>
    )
}

export default Checkout