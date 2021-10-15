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

    const classContent3 = () => {
        if (props.character.origin === 'unknown') {
            return "fas fa-question";
        }
        else if (!props.character.origin.includes('Earth')) {
            return "fas fa-globe";
        }
        else {
            return "fas fa-globe-europe";
        }
    }
    if (props.character === undefined) {
        return (
            <ModalWindow title={'Character not found'}>
                <div className="no_found_img_container">
                    <img className="no_found_img" src={logo} alt="Rick Sanchez PNG transparente" />
                </div>
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
                    <div className="character_info_item_3">
                        <p>
                            Origin: {props.character.origin} </p>
                        <i className={`status_icon ${classContent3()}`}></i>
                    </div>
                    <div className="character_info_item_4">
                        <p >
                            Total episodes: {(props.character.episodes).length} </p>
                        <i className="status_icon fas fa-film"></i>
                    </div>
                </article>
            </ModalWindow>
        )
    }

}
export default CharacterDetail;