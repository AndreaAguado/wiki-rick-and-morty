import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
    return (
        <Link to={`/character/${props.character.id}`}>
            <img className="character_img" src={props.character.photo} alt={props.character.name} />
            <div className="character_info">
                <p className="info_item">{props.character.name}</p>
                <p className="info_item">{props.character.species}</p>
            </div>
        </Link>
    )
}
export default CharacterCard;