class MovieService {

    constructor() {
		this.movies=[
			{
				title: "Blade Runner",
				year: 1982,
				genres: [ 'Sci-Fi', 'Thriller' ],
				rating: 8.2,
				image: 'http://ia.media-imdb.com/images/M/MV5BMTA4MDQxNTk2NDheQTJeQWpwZ15BbWU3MDE2NjIyODk@._V1_.jpg'
			},
			{
				title: "The Cabin in the Woods",
				year: 2012,
				genres: [ 'Fantasy', 'Horror', 'Mystery' ],
				rating: 7.0,
				image: 'http://ia.media-imdb.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
			},
			{
				title: "Event Horizon",
				year: 1997,
				genres: [ 'Horror', 'Sci-Fi', 'Thriller' ],
				rating: 6.7,
				image: 'http://ia.media-imdb.com/images/M/MV5BMTYxNzY0MjczNV5BMl5BanBnXkFtZTgwOTIxNzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
			},
			{
				title: "Star Wars: Episode VII - The Force Awakens",
				year: 2015,
				genres: [ 'Action', 'Adventure', 'Fantasy' ],
				rating: 8.2,
				image: 'http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
			},
			{
				title: "Ghost Busters",
				year: 1984,
				genres: [ 'Adventure', 'Comedy', 'Fantasy' ],
				rating: 7.8,
				image: 'http://ia.media-imdb.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
			}
			
		];
    }
	
	getMovies() {
		return this.movies;
	}
}

export default MovieService;