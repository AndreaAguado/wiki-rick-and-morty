import logo from '../images/Rick_and_Morty_logo.png';
import '../styles/layout/Header.scss';
const Header = () => {
    return (
        <header className="header">
            <img className="header_logo" src={logo} alt="Rick and Morty logo" />
        </header>
    )
}
export default Header;