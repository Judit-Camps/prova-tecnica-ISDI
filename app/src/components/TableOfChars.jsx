import { useEffect, useState } from "react"
import logic from "../logic"

export default function TableOfChars({ onHideTableClick }) {
    const [characters, setCharacters] = useState([])


    const load10Characters = () => {
        try {
            logic.getManyCharacters(10)
                .then(setCharacters)
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        load10Characters()
    }, [])

    const handleHideClick = () => {
        onHideTableClick()
    }

    return <>
        <div className="m-16 bg-green-900 p-16 flex flex-col rounded-xl">
            <h2 className="font-bold text-xl">First 10 characters</h2>
            <table className="min-w-[80%] divide-y divide-gray-200 p-8">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-lg font-bold">NAME</th>
                        <th>SPECIES</th>
                        <th>STATUS</th>
                        <th>GENDER</th>
                        <th>ORIGIN</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>

                <tbody className=" divide-y divide-gray-200">
                    {characters.map(character =>
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.species}</td>
                            <td>{character.status}</td>
                            <td>{character.gender}</td>
                            <td>{character.origin.name}</td>
                            <td>{character.location.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className="mt-12 w-40" onClick={handleHideClick}>Hide table</button>
        </div>

    </>
}