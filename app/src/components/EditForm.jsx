export default function EditForm({ character, onCancelClick }) {

    const handleCancelClick = () => {
        onCancelClick()
    }

    return <>
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="fixed bg-green-900 z-10 w-[90%] md:w-[50%] p-8 rounded shadow-lg">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="charName" className="mb-2 text-sm font-medium">Character Name</label>
                        <input
                            id="charName"
                            type="text"
                            defaultValue={character.name}
                            className="border border-gray-300 rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="location" className="mb-2 text-sm font-medium ">Location</label>
                        <input
                            id="location"
                            type="text"
                            defaultValue={character.location.name}
                            className="border border-gray-300 rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="status" className="mb-2 text-sm font-medium ">Status</label>
                        <input
                            id="status"
                            type="text"
                            defaultValue={character.status}
                            className="border border-gray-300 rounded p-2"
                        />
                    </div>

                    <button>Change</button>
                </form>
                <button onClick={handleCancelClick} className="mt-4 bg-red-500 text-white hover:bg-red-700">Cancel</button>
            </div>
        </section>
    </>
}