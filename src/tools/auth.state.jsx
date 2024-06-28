import useLocalStorage2 from '../hooks/useLocalStorage2';
import AuthContext from './auth.context';

const AuthState = (props) => {
    const storage = useLocalStorage2({token:null}, 'auth');

    const initialState = {
        auth: storage.almacenamiento,
    };

    const reset = () => {
        storage.reemplazar({token:null});
    }

    return (
        <AuthContext.Provider
            value={{
                auth: initialState.auth,
                set: (token) => storage.reemplazar({token}),
                reset
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
