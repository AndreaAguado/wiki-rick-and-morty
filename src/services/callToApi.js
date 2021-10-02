const callToApi = () => {
    return (
        fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data.results.map((character) => {
                    return {
                        photo: character.image,
                        name: character.name,
                        species: character.species,
                        id: character.id,
                        status: character.status,
                        origin: character.origin.name,
                        episodes: character.episodes
                    }
                })
            })
    )
}
// const objectToExport = {
//     callToApi: callToApi
// };
export default callToApi;