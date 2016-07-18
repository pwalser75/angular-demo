function detailRoute($stateProvider) {

	 return $stateProvider
        .state('movies', {
            url: '/movies',
            views: {
                application: {
                    controller: 'MovieListController as ctrl',
                    templateUrl: 'templates/movie-list.html',
					resolve: {
                        movies: ['MovieService', function(movieService) {
                            return movieService.getMovies();
                        }]
                    }
                },
				menu: {
                    controller: 'ApplicationController as ctrl',
                    templateUrl: 'templates/movies-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];