function detailRoute($stateProvider) {

    return $stateProvider
        .state('app.movieDetail', {
            url: '/movies/:id',
            views: {
                application: {
                    controller: 'MovieDetailController as ctrl',
                    templateUrl: 'templates/movie-detail.html',
                    resolve: {
                        movie: ['MovieService', '$stateParams', function (movieService, $stateParams) {
                            return movieService.getMovie($stateParams.id);
                        }]
                    }
                },
                menu: {
                    controller: 'ApplicationController as ctrl',
                    templateUrl: 'templates/default-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];