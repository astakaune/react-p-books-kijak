import React from "react";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import List from "./components/List";
import NotFound from "./components/NotFound";
import Books from "./contexts/Books";

function App() {
	const [books, setBooks] = useState({ showBooks: [], masterBooks: [] });

	useEffect(() => {
		axios.get("https://in3.dev/knygos/").then((res) => {
			setBooks({
				showBooks: res.data,
				masterBooks: res.data,
			});
		});
		// ------2 pavyzdziai: su fetch ir axios----------
		// fetch('https://in3.dev/knygos/')
		// .then(res => res.json())
		// .then(data => {
		//     setBooks({
		//         showBooks: data,
		//         masterBooks: data
		//     })
		// });
	}, []);

	return (
		<Books.Provider value={books}>
			<div className="App col top">
				<div className="books">
					<h1>BOOK STORE:</h1>
					<Box width={300}>
						<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
					</Box>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<List></List>}></Route>
							<Route path="/book/:id" element={<Book></Book>}></Route>
							<Route path="*" element={<NotFound></NotFound>}></Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</Books.Provider>
	);
}

export default App;
