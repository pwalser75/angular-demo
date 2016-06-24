
function detailRoute($stateProvider) {

	 return $stateProvider
        .state('index', {
            url: '/',
            views: {
                application: {
                    controller: 'ApplicationController as applicationController',
                    templateUrl: 'templates/application.html'
                },
				menu: {
                    controller: 'ApplicationController as applicationController',
                    templateUrl: 'templates/default-menu.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];