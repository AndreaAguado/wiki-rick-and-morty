import '../styles/layout/CharacterCard.scss';
const CharacterCard = (props) => {
    return (
        <li key={props.character.id} id={props.character.id} className="character_card">
            <img className="character_img" src={props.character.photo} alt={props.character.name} />
            <div className="character_info">
                <p className="info_item">{props.character.name}</p>
                <p className="info_item">{props.character.species}</p>
            </div>
        </li>
    )
}
export default CharacterCard;