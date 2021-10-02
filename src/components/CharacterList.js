import '../styles/layout/CharactersList.scss';
const CharacterList = (props) => {
    return (
        <section className="characters_list_section" >
            <ul className="characters_list">
                {props.renderCharacters()}
            </ul>
        </section>
    )
}
export default CharacterList;