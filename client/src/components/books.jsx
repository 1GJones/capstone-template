
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Fuse from 'fuse.js'
import axios from "axios";
import api from "../utils/api.utils";
import { useNavigate } from "react-router-dom";

const Books = () => {
	const [books, setBooks] = useState(null);
	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState(null)
	
	const nav = useNavigate()
	useEffect(() => {
		api
			.get("/books/")
			.then((res) => {
				setBooks(res.data)
			})
			.catch(err => console.log(err))
	}, []);

	useEffect(() => {
    if (books && query) {
      const fuse = new Fuse(books, { keys: ['title', 'authors'], threshold: 0.1 });
      const results = fuse.search(query);
      setSearchResults(results.map(result => result.item));
    } else {
      setSearchResults(null);
    }
  }, [books, query]);


	const handleBookSearch = (e) => {
		const { value} = e.target;
		setQuery(value)
	}

	const displayBooks = searchResults || books;
	
	return (
		<>
		<input className="searchBar" type="text" placeholder="Search Books" value={query} onChange={handleBookSearch} style={{ float: "right" }}></input> 
			<Grid container spacing={ 3 } columns={{ xs: 4, sm: 8, md: 12 }}>
				{displayBooks &&
				displayBooks.map((book) => (
					<Grid item xs={2} md={4} key={book._id} >
						<span className='displayBook' onClick={ () => nav(`/book/${book._id}`)} >
							<img className="bookHover" src={book.image_url} />
							<p>{book.title}</p>
						</span>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Books;
