
function detailRoute($stateProvider) {

	 return $stateProvider
        .state('movies', {
            url: '/movies',
            views: {
                application: {
                    controller: 'MovieListController as movieListController',
                    templateUrl: 'components/movie-list/movie-list.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];