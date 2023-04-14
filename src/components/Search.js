import { useState } from "react";

function Search({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(selectedGenre, year);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for a music genre"
                className="py-2 px-4 w-full text-gray-800 bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
            />
            <select
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
                className="py-2 px-4 w-48 text-gray-800 bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
            >
                <option value="">Select a genre</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="hip-hop">Hip Hop</option>
                <option value="country">Country</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="electronic">Electronic</option>
                <option value="reggae">Reggae</option>
                <option value="blues">Blues</option>
                <option value="folk">Folk</option>
                {/* Add more genres here */}
            </select>
            <input
                type="number"
                min="2000"
                max={new Date().getFullYear()}
                placeholder="Filter by year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                className="w-full p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <button
                type="submit"
                className="py-2 px-4 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-200"
            >
                Search
            </button>
        </form>
    );
}

export default Search;
