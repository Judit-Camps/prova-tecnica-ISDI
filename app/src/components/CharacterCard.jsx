export default function CharacterCard({ item: character }) {

    return <article className="p-8 bg-red-100 rounded-lg m-8">
        <h1 className="text-2xl">{character.name}</h1>
        <img src={character.image} alt="" />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Location: {character.location.name}</p>
    </article>

}