import '../styles/layout/NoFoundPage.scss';
import noFoundLogo from '../images/404-error-not-found.png';
import { Link } from 'react-router-dom';
const NoFoundPage = () => {
    return (
        <section className="nofound_section">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <p className="infomessage">Volver al Inicio</p>
            </Link>
            <img className="img" src={noFoundLogo} alt="Error 404 page not found" />

        </section>
    )
}
export default NoFoundPage;