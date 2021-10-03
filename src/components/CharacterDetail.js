import '../styles/layout/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import ModalWindow from './ModalWindow';
import logo from '../images/rick_no_found.png';

const CharacterDetail = (props) => {
    if (props.character === undefined) {
        return (
            <ModalWindow title={'Personaje no encontrado'}>
                <img className="no_found_img" src={logo} alt="Rick Sanchez PNG transparente" />
            </ModalWindow>
        )
    }
    else {
        return (
            <ModalWindow title={props.character.name}>
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

}
export default CharacterDetail;