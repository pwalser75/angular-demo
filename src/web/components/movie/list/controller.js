class MovieListController {
	
    constructor(movies) {
		this.movies=movies;
    }
}

MovieListController.$inject=['movies'];
export default MovieListController;