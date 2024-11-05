import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="flex space-x-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books"
                className="border p-2 rounded-md"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
