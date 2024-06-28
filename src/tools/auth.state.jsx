import useLocalStorage2 from '../hooks/useLocalStorage2';
import CarritoContext from './carrito.context';
import AuthContext from './auth.context';

const AuthState = (props) => {
    const storage = useLocalStorage2({token:null}, 'auth');

    const initialState = {
        auth: storage.almacenamiento,
    };

    return (
        <AuthContext.Provider
            value={{
                auth: initialState.auth,
                set: storage.actualizar
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
