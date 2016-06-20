
function detailRoute($stateProvider) {

	 return $stateProvider
        .state('application', {
            url: '/',
            //abstract: true,
            views: {
                application: {
                    controller: 'ApplicationController as applicationController',
                    templateUrl: './components/application/application.html'
                }
            }
        });
}

export default ['$stateProvider', detailRoute];