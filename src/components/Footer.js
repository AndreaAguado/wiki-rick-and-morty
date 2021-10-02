import '../styles/layout/Footer.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <small className="footer_small"> &copy; Andrea Aguado 2021</small>
            <a href={'https://github.com/AndreaAguado'} title={'github.com/AndreaAguado'} target="_blank" rel="noreferrer"><i class="fab fa-github github_icon"></i></a>
        </footer >
    )
}
export default Footer;