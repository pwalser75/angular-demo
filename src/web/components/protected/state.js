function detailRoute($stateProvider) {

    return $stateProvider
        .state('app.protected', {
            url: '/protected',
            views: {
                application: {
                    controller: 'ProtectedController as ctrl',
                    templateUrl: 'templates/protected.html',
                    resolve: {
                        data: ['ProtectedService', function (protectedService) {
                            return protectedService.getData();
                        }]
                    }
                }
            }
        });
}

export default ['$stateProvider', detailRoute];