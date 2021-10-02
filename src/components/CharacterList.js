import '../styles/layout/CharactersList.scss';
import CharacterCard from './CharacterCard';
const CharacterList = (props) => {
    const html = props.filteredData.map((character) => {
        return (
            <li key={character.id} id={character.id} className="character_card">
                <CharacterCard character={character}></CharacterCard>
            </li >
        )
    })
    return (
        <ul className="characters_list">
            {html}
        </ul>
    )
}
export default CharacterList;