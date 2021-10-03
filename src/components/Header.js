import logo from '../images/Rick_and_Morty_logo.png';
import '../styles/layout/Header.scss';
const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header_link"><img className="header_logo" title="Rick and Morty logo" src={logo} alt="Rick and Morty logo" /></a>
        </header>
    )
}
export default Header;