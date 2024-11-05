import React from 'react';

const Bookcard = ({ book }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            {book.cover_i ? (
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                    alt="Book cover"
                    className="w-full h-64 object-cover rounded-md"
                />
            ) : (
                <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                    <p>No Cover Available</p>
                </div>
            )}
            <h2 className="text-lg font-bold mt-2">{book.title}</h2>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded-md">
                View Details
            </button>
        </div>
    );
};

export default Bookcard;
