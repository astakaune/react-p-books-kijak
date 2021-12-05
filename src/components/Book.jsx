import { useContext } from "react";
import { useParams } from "react-router";
import Books from "../contexts/Books";

function Book() {
	const books = useContext(Books);
	const { id } = useParams();
	const [book] = books.masterBooks.filter((b) => parseInt(id) === b.id);
	//filtras grazina nufiltruoto masyvo kopija const [masyvas] = ...filer...

	if (typeof book === "undefined") {
		if (books.masterBooks.length === 0) {
			return (
				<div className="books__book">
					<h2>Palaukite, knyga siunčiama</h2>
				</div>
			);
		} else {
			return (
				<div className="books__book">
					<h2>The book was not found</h2>
				</div>
			);
		}
	}
	return (
		<div className="books__book">
			<h2>{book.title}</h2>
			<img src={book.img} alt={book.title}></img>
			<div className="books__book__author">{book.author}</div>
			<div className="books__book__price">{book.price}&euro;</div>
			<div className="books__book__button">
				<button className="button">Buy</button>
			</div>
		</div>
	);
}

export default Book;
