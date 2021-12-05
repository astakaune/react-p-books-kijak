import React from 'react';
import {useContext} from "react";
import Books from '../contexts/Books';
import ListBook from './ListBook';

function List() {
    const books = useContext(Books);

    //conditional render
    if (books.showBooks.length === 0) {
        return (
        <div className="books__list__loading">
            <span className="btn-shine">Loading Books List...</span>
        </div>
        )
    }

    return (
        <div className="books__list">
            {
                books.showBooks.map(b => <ListBook key={b.id} book={b}></ListBook>)
            }
        </div>
    )
}

export default List;
