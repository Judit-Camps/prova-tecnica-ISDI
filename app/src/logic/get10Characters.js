export default function get10Characters() {

    return fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]", {})
        .then(res => {
            return res.json()
        })
}