class MovieListController {
	
    constructor(movieService) {
		this.movieService=movieService;
    }
}

MovieListController.$inject=['MovieService'];
export default MovieListController;