import CharacterCardList from '../components/CharacterCardList'
import logic from '../logic'
import { useState } from 'react'

export default function Home() {
    const [stamp, setStamp] = useState(null)

    return <>
        <h1>Home</h1>

        <CharacterCardList stamp={stamp} />
    </>
}