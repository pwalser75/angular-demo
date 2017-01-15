function errorHandlingConfig($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('# stateChangeStart to ' + toState.name + ' (url: ' + toState.url + ')');
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.log('# stateChangeError - fired when an error occurs during transition.');
        console.log(arguments);
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('# stateChangeSuccess to ' + toState.name);
    });

    $rootScope.$on('$viewContentLoaded', function (event) {
        console.log('# viewContentLoaded');
    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.log('# stateNotFound: ' + unfoundState.to);
        console.log(unfoundState, fromState, fromParams);
    });
}

export default [
    '$rootScope',
    errorHandlingConfig
];
