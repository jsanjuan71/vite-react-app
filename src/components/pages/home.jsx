import { Link } from 'react-router-dom';
import Menu from '../menu';

function Home(props) {
    return (
        <>
            <Menu carrito={props.carrito} />
            <h1>Home Page</h1>
        </>
    );
}

export default Home;
