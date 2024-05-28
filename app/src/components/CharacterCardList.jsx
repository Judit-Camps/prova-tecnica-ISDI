import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard"
import logic from "../logic"

export default function CharacterCardList({ stamp }) {
    const [characters, setCharacters] = useState([])

    const loadCharacters = () => {
        try {
            logic.get10Characters()
                .then(setCharacters)
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadCharacters()
    }, [stamp])

    return <section>
        {characters.map(character => <CharacterCard key={character.id} item={character} />)}
    </section>
}