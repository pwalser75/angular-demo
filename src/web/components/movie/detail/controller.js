class MovieDetailController {
	
    constructor(movieService, $stateParams) {
		this.movieService=movieService;
		if ($stateParams.id){
			this.movie=movieService.getMovie($stateParams.id);
		}
    }
}
MovieDetailController.$inject=['MovieService','$stateParams'];
export default MovieDetailController;