function detailRoute($stateProvider) {

    return $stateProvider
        .state('app.login', {
            url: '/login',
            views: {
                application: {
                    controller: 'LoginController as ctrl',
                    templateUrl: 'templates/login.html'
                },
                menu: {
                    controller: 'ApplicationController as ctrl',
                    templateUrl: 'templates/default-menu.html'
                },
                userMenu: {
                    controller: 'ApplicationController as ctrl',
                    templateUrl: 'templates/user-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];