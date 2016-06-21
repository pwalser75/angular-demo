class ApplicationController {
	
    constructor(movieService) {
		this.title="ApplicationController";
		this.message="Hello from Angular";
		this.data=[
			{
				title: "First",
				description: "This is the first item"
			},
			{
				title: "Second",
				description: "This is the second item"
			},
			{
				title: "Third",
				description: "This is the third item"
			}
		];
		this.movieService=movieService;
    }
}
ApplicationController.$inject=['MovieService'];
export default ApplicationController;