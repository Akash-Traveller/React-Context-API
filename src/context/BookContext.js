import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducer/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // const [books, setBooks] = useReducer([
    //     { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    //     { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    // ]);

    // const addBook = (title, author) => {
    //     setBooks([...books, { title, author, id: uuidv4() }]);
    // };

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // }

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;