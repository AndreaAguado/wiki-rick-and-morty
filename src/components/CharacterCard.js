import '../styles/layout/CharacterCard.scss';
import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
    const classContent = () => {
        if (props.character.status === 'Alive') {
            return "fas fa-heartbeat";
        }
        else if (props.character.status === 'Dead') {
            return "fas fa-skull-crossbones";
        }
        else {
            return "fas fa-question";
        }
    }

    return (
        <Link to={`/character/${props.character.id}`} style={{ textDecoration: 'none' }}>
            <img className="character_img" src={props.character.photo} alt={props.character.name} />
            <div className="card_bottom">
                <div className="character_info">
                    <p className="info_item">{props.character.name}</p>
                    <p className="info_item">{props.character.species}</p>
                </div>
                <i className={`status_icon ${classContent()}`} title={`status: ${props.character.status}`}></i>
            </div>
        </Link>
    )
}
export default CharacterCard;