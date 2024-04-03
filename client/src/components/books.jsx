
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Fuse from 'fuse.js'
import axios from "axios";

const Books = () => {
	const [books, setBooks] = useState(null);
	const [query, setQuery] = useState('');
	
	useEffect(() => {
		axios
			.get("http://localhost:3001/api/books")
			.then((res) => {
				console.log(res.data)
				setBooks(res.data)
			})
			.catch(error => console.log({error: error}))
	}, []);

	const fuse = books ? new Fuse(books, {keys: ['title'], threshold: 0.1, }) : null;
	
	if (fuse && query) {
		const results = fuse.search(query)
		bookResults = results.map(result => result.item)
	}

	const handleBookSearch = (e) => {
		const { value} = e.target;
		setQuery(value)
	}
	
	return (
		<>
		<input className="searchBar" type="text" placeholder="Search Books" value={query} onChange={handleBookSearch} style={{ float: "right" }}></input> 
			<Grid container spacing={ 3 } columns={{ xs: 4, sm: 8, md: 12 }}>
				{books &&
				books.map((book) => (
					<Grid item xs={2} md={4} key={book._id} >
						<item className='displayBook'>
							<img src={book.image_url} />
							<p>{book.title}</p>
						</item>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Books;
