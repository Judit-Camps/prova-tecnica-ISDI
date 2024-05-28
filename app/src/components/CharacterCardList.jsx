import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard"
import logic from "../logic"

export default function CharacterCardList({ stamp, onEditClick }) {
    const [characters, setCharacters] = useState([])

    const loadCharacters = () => {
        try {
            logic.getManyCharacters(20)
                .then(setCharacters)
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadCharacters()
    }, [stamp])

    const handleCharacterEditClick = character => {
        onEditClick(character)
    }

    return <section className="grid grid-cols-1 lg:grid-cols-4">
        {characters.map(character => <CharacterCard key={character.id} item={character} onCharacterClick={handleCharacterEditClick} />)}
    </section>
}