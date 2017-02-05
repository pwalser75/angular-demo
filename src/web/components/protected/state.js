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
                },
                userMenu: {
                    controller: 'ApplicationController as ctrl',
                    templateUrl: 'templates/user-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];