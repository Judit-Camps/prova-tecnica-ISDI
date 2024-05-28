export default function CharacterCard({ item: character, onCharacterClick }) {

    const handleCharacterClick = character => {
        onCharacterClick(character)
    }

    return <article onClick={() => handleCharacterClick(character)} className="p-8 bg-black rounded-lg m-5 hover:bg-green-900 w-80">
        <h1 className="text-2xl font-bold">{character.name}</h1>
        <img src={character.image} alt="" className="pb-2" />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Location: {character.location.name}</p>
    </article>

}