import '../styles/layout/NavBar.scss';
const NavBar = (props) => {
    return (
        <nav className="pages_nav_bar">
            <button className={props.pageNum === 1 ? 'hidden' : ''} onClick={props.handlePrevPage}>Previous</button>
            <p className="pages_nav_bar_index">Page {props.pageNum} of {props.numberOfPages}</p>
            <button className={props.pageNum === props.numberOfPages ? 'hidden' : ''} onClick={props.handleNextPage}>Next</button>
        </nav>
    )
}
export default NavBar;