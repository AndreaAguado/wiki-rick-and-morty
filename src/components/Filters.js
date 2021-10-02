import '../styles/layout/Filters.scss';
const Filters = (props) => {
    return (
        <form action="">
            <input onKeyUp={props.handleSearch} className="text_input" type="text" />
        </form>
    )
}
export default Filters;