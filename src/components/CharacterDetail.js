import '../styles/layout/CharacterDetail.scss';
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
                <article className="character_detail">
                    <img className="character_detail_img" src={props.character.photo} alt={props.character.name} />
                    <div className="character_info">
                        <p className="character_info_item">
                            Status: {props.character.status} </p>
                        <p className="character_info_item">
                            Species: {props.character.species} </p>
                        <p className="character_info_item">
                            Origin: {props.character.origin} </p>
                        <p className="character_info_item">
                            Episodes: {(props.character.episodes).length} </p>
                    </div>
                </article>
                {/* </div > */}
            </ModalWindow>
        )
    }

}
export default CharacterDetail;