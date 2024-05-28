export default function getManyCharacters(value) {

    const arr = Array.from({ length: value }, (v, i) => i + 1)

    return fetch(`https://rickandmortyapi.com/api/character/${arr}`, {})
        .then(res => {
            return res.json()
        })
        .catch(error => console.error(error))
}