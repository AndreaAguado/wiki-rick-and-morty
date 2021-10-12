const callToApi = () => {
    return (
        fetch('https://rickandmortyapi.com/api/character/?page=1')
            .then(response => response.json())
            .then(data => {
                return data.results.map((character) => {
                    return {
                        photo: character.image,
                        name: character.name,
                        species: character.species,
                        id: character.id,
                        status: character.status,
                        origin: character.origin.name,
                        episodes: character.episode,
                    }
                })
            })
    )
}

const bringInfo = () => {
    return (
        fetch('https://rickandmortyapi.com/api/character/?page=1')
            .then(response => response.json())
            .then(data => {
                return {
                    count: data.info.count,
                    pages: data.info.pages,
                    next: data.info.next,
                    prev: data.info.prev
                }
            })
    )
}

const nextPages = (pageNum) => {
    if (pageNum !== null) {
        return (
            fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
                .then(response => response.json())
                .then(data => {
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

}
const objectToExport = {
    callToApi: callToApi,
    bringInfo: bringInfo,
    nextPages: nextPages
};
export default objectToExport;