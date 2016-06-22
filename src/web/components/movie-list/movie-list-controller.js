class ApplicationController {
	
    constructor(movieService) {
		this.movieService=movieService;
    }
}
ApplicationController.$inject=['MovieService'];
export default ApplicationController;