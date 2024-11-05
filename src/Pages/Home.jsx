import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const Home = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async (query) => {
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
            console.log(response.data); // Debug: check if data contains docs
            setBooks(response.data.docs || []); // Set books only if `docs` exists
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    return (
        <div>
            <SearchBar onSearch={fetchBooks} />
            <BookList books={books} />
        </div>
    );
};

export default Home;
