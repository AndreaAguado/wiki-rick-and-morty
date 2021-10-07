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
    const handleSelectOrigin = (ev) => {
        props.handleOrigin(ev.target.value);
    }
    const handleChangeCheckbox = (ev) => {
        props.handleCheckbox(ev.target.checked);
    }
    return (
        <form className="form" onSubmit={(ev) => ev.preventDefault()}>
            <input
                onKeyUp={handleChange}
                className="text_input"
                type="text"
                placeholder="Write something here..." />
            <span className="selector_container">
                <label className="selector_label" htmlFor="species">Species:</label>
                <select onChange={handleSelect} className="species_filter" name="species" id="species">
                    <option value="All">Show all</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                </select>
                <label className="selector_label" htmlFor="status">Status:</label>
                <select onChange={handleSelectStatus} className="status_filter" name="status" id="status">
                    <option value="All">Show all</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label className="selector_label" htmlFor="origin">Origin:</label>
                <select onChange={handleSelectOrigin} className="status_filter" name="origin" id="origin">
                    <option value="All">Show all</option>
                    <option value="Earth (C-137)">Earth (C-137)</option>
                    <option value="Earth (Replacement Dimension)">Earth (Replacement Dimension)</option>
                    <option value="unknown">Unknown</option>
                </select>
                <input onChange={handleChangeCheckbox} type="checkbox" name="origin_check" id="origin_check" checked={props.checkbox} />
            </span>
        </form>
    )
}
export default Filters;