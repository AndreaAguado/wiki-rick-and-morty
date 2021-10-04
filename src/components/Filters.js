import '../styles/layout/Filters.scss';
const Filters = (props) => {
    const handleChange = (ev) => {
        props.handleSearch(ev.target.value);

    }
    const handleSelect = (ev) => {
        props.handleSpecies(ev.target.value);
    }
    return (
        <form onSubmit={(ev) => ev.preventDefault()}>
            <input
                onKeyUp={handleChange}
                className="text_input"
                type="text" />
            <select onChange={handleSelect} className="species_filter" name="species" id="species">
                <option value="" selected disabled="disabled">Species:</option>
                <option value="All">Show all</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>
        </form>
    )
}
export default Filters;