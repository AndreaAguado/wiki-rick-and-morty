import '../styles/layout/Filters.scss';
const Filters = (props) => {
    const handleChange = (ev) => {
        props.handleSearch(ev.target.value);
    }
    return (
        <form onSubmit={(ev) => ev.preventDefault()} action="">
            <input
                //  value={props.lastSearch !== '' ? props.lastSearch : ''} 
                // value={props.search !== '' ? props.search : ''}
                // onKeyUp={props.handleSearch}
                onKeyUp={handleChange}
                className="text_input"
                type="text" />
        </form>
    )
}
export default Filters;