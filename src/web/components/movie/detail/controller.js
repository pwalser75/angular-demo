class MovieDetailController {
	
    constructor(movie) {
		this.movie=movie;
    }
}
MovieDetailController.$inject=['movie'];
export default MovieDetailController;