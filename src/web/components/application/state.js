function detailRoute($stateProvider) {

    return $stateProvider
        .state('app', {
                abstract: true,
                templateUrl: 'templates/application.html'
            }
        );
}

export default ['$stateProvider', detailRoute];