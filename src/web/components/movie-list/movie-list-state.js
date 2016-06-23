
function detailRoute($stateProvider) {

	 return $stateProvider
        .state('movies', {
            url: '/movies',
            views: {
                application: {
                    controller: 'MovieListController as movieListController',
                    templateUrl: 'templates/movie-list.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];