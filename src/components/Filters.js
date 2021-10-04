import '../styles/layout/Filters.scss';
const Filters = (props) => {
    const handleChange = (ev) => {
        props.handleSearch(ev.target.value);

    }
    const handleSelect = (ev) => {
        props.handleSpecies(ev.target.value);
    }
    const handleSelectStatus = (ev) => {
        props.handleStatus(ev.target.value);
    }
    return (
        <form className="form" onSubmit={(ev) => ev.preventDefault()}>
            <input
                onKeyUp={handleChange}
                className="text_input"
                type="text"
                placeholder="Write something here..." />
            <span className="selector_container">
                <label htmlFor="species">Species:</label>
                <select onChange={handleSelect} className="species_filter" name="species" id="species">
                    <option value="All">Show all</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                </select>
                <label htmlFor="status">Status:</label>
                <select onChange={handleSelectStatus} className="status_filter" name="status" id="status">
                    <option value="All">Show all</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </span>
        </form>
    )
}
export default Filters;