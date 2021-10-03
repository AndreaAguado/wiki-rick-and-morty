import '../styles/layout/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import ModalWindow from './ModalWindow';
const CharacterDetail = (props) => {
    return (
        <ModalWindow>
            <div className="character_detail">
                <Link to="/">
                    <button
                        // onClick={props.handleLastSearch}
                        className="return_button">
                        Volver
                    </button>
                </Link>
                <article className="character_card">
                    <img src={props.character.photo} alt={props.character.name} />
                    <div className="character_info">
                        <h3>{props.character.name}</h3>
                        <p>Status: {props.character.status} </p>
                        <p>Species: {props.character.species} </p>
                        <p>Origin: {props.character.origin} </p>
                        <p>Episodes: {(props.character.episodes).length} </p>
                    </div>
                </article>
            </div >
        </ModalWindow>
    )
}
export default CharacterDetail;