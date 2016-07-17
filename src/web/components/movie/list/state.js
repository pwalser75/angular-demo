function detailRoute($stateProvider) {

	 return $stateProvider
        .state('movies', {
            url: '/movies',
            views: {
                application: {
                    controller: 'MovieListController as ctrl',
                    templateUrl: 'templates/movie-list.html'
                },
				menu: {
                    controller: 'MovieListController as ctrl',
                    templateUrl: 'templates/movies-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];