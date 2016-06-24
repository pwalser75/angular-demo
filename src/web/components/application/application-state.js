
function detailRoute($stateProvider) {

	 return $stateProvider
        .state('index', {
            url: '/',
            views: {
                application: {
                    controller: 'ApplicationController as applicationController',
                    templateUrl: 'templates/application.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];