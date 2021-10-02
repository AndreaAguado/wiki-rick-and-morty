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

    const message = () => {
        if (html.length < 1) {
            return <p className="warning_message">No existen personajes que coincidan con : "{props.search}" </p>
        }
        else {
            return (
                <ul className="characters_list">
                    {html}
                </ul>
            )
        }
    }

    return (
        <>
            {message()}
            {/* <ul className="characters_list">
                {html}
            </ul> */}
        </>

    )
}
export default CharacterList;