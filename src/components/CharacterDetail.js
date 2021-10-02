import '../styles/layout/CharacterDetail.scss';
const CharacterDetail = (props) => {
    return (
        <div className="character_detail">
            <button className="return_button">Volver</button>
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
    )
}
export default CharacterDetail;