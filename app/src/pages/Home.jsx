import CharacterCardList from "../components/CharacterCardList"
import { useState } from "react"
import TableOfChars from "../components/TableOfChars"
import EditForm from "../components/EditForm"

export default function Home() {
    const [stamp, setStamp] = useState(null)
    const [view, setView] = useState(null)
    const [char, setChar] = useState(null)

    const handleShowTableClick = () => {
        setView("show-table")
    }
    const handleHideTableClick = () => {
        setView(null)
    }

    const handleEditCancelClick = () => {
        setView(null)
    }

    const handleEditClick = character => {
        setView("edit-char")
        setChar(character)
    }

    return <>
        <div className="fixed top-0 flex items-center justify-between bg-green-900 w-full p-4 h-24">
            <h1 className="">Rick and Morty characters</h1>

            {view !== "show-table" && <button onClick={handleShowTableClick}>Show table</button>}
        </div>

        {view === "show-table" && <TableOfChars onHideTableClick={handleHideTableClick} />}

        <div className="mt-24">
            <CharacterCardList stamp={stamp} onEditClick={handleEditClick} />

        </div>

        {view === "edit-char" && <EditForm character={char} onCancelClick={handleEditCancelClick} />}
    </>
}