function detailRoute($stateProvider) {

	 return $stateProvider
        .state('movieDetail', {
            url: '/movies/:id',
            views: {
                application: {
                    controller: 'MovieDetailController as movieDetailController',
                    templateUrl: 'templates/movie-detail.html'
                },
				menu: {
                    controller: 'ApplicationController as applicationController',
                    templateUrl: 'templates/default-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];