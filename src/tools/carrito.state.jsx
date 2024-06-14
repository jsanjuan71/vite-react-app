import useLocalStorage2 from '../hooks/useLocalStorage2';
import CarritoContext from './carrito.context';

const CarritoState = (props) => {
    const storage = useLocalStorage2([], 'carrito');

    const initialState = {
        productos: storage.almacenamiento,
        estado: 'en proceso',
    };

    return (
        <CarritoContext.Provider
            value={{
                productos: initialState.productos,
                agregar: storage.agregar,
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};

export default CarritoState;
