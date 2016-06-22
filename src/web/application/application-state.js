
function detailRoute($stateProvider) {

	 return $stateProvider
        .state('index', {
            url: '/',
            views: {
                application: {
                    controller: 'ApplicationController as applicationController',
                    templateUrl: './application/application.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];