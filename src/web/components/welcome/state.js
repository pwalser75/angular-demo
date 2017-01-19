function detailRoute($stateProvider) {

    return $stateProvider
        .state('app.welcome', {
            url: '/welcome',
            views: {
                application: {
                    controller: 'WelcomeController as ctrl',
                    templateUrl: 'templates/welcome.html',
                    resolve: {
                        exampleData: ['ExampleService', function (exampleService) {
                            return exampleService.getData();
                        }]
                    }
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