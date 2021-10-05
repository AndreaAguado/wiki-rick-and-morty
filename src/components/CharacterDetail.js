import '../styles/layout/CharacterDetail.scss';
import ModalWindow from './ModalWindow';
import logo from '../images/rick_no_found.png';

const CharacterDetail = (props) => {
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
    const classContent2 = () => {
        if (props.character.species === 'Alien') {
            return "fas fa-pastafarianism";
        }
        else if (props.character.species === 'Human') {
            return "fas fa-child";
        }
    }
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
                <article className="character_detail">
                    <img className="character_detail_img" src={props.character.photo} alt={props.character.name} />
                    <div className="character_info_item_1">
                        <p >
                            Status: {props.character.status} </p>
                        <i className={`status_icon ${classContent()}`} title={`status: ${props.character.status}`}></i>
                    </div>
                    <div className="character_info_item_2">
                        <p >
                            Species: {props.character.species} </p>
                        <i className={`status_icon ${classContent2()}`} title={`species: ${props.character.species}`}></i>
                    </div>
                    <p className="character_info_item_3">
                        Origin: {props.character.origin} </p>
                    <p className="character_info_item_4">
                        Total episodes: {(props.character.episodes).length} </p>
                </article>
            </ModalWindow>
        )
    }

}
export default CharacterDetail;