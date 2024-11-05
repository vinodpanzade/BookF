import React from 'react';
import Bookcard from './Bookcard';

const BookList = ({ books }) => {
    if (!books || books.length === 0) {
        return <p>No books found. Try another search.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
                <Bookcard key={book.key} book={book} />
            ))}
        </div>
    );
};

export default BookList;
