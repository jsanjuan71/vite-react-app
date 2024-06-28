import { Link, useNavigate } from 'react-router-dom';
import Menu from '../menu';
import { Cart4 } from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';
import banner from '../../assets/banner.jpeg';
import { useContext, useEffect } from 'react';
import AuthContext from '../../tools/auth.context';

function Home() {
    const authCtx = useContext( AuthContext )
    const redirect = useNavigate()

    useEffect(() => {
        if(!authCtx.auth.token) {
            redirect('/')
        }
    }, [authCtx.auth.token])

    return (
        <>
            <Menu />
            <Row>
                <Col>
                    <img src={banner} width={"100%"} alt="Home" />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Link to="/catalogo" className="btn btn-primary">
                            <Cart4 /> Ver productos
                    </Link>
                </Col>
            </Row>
        </>
    );
}

export default Home;
