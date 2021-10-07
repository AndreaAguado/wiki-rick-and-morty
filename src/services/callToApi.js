const callToApi = () => {
    return (
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                return data.results.map((character) => {
                    return {
                        photo: character.image,
                        name: character.name,
                        species: character.species,
                        id: character.id,
                        status: character.status,
                        origin: character.origin.name,
                        episodes: character.episode
                    }
                })
            })
    )
}
// const objectToExport = {
//     callToApi: callToApi
// };
export default callToApi;