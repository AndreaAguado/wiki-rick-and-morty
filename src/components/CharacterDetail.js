const CharacterDetail = (props) => {
    return (
        <>
            <button>Volver</button>
            <article>
                <img src={props.character.photo} alt={props.character.name} />
                <div className="character_info">
                    <h3>{props.character.name}</h3>
                    <p>Status: {props.character.status} </p>
                    <p>Species: {props.character.species} </p>
                    <p>Origin: {props.character.origin} </p>
                    <p>Episodes: {props.character.episodes} </p>
                </div>
            </article>
        </>
    )
}
export default CharacterDetail;