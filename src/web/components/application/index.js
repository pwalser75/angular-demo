import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMessages from "angular-messages";
import state from "./state";
import errorHandling from "./error-handling";
import controller from "./controller";
import welcomeComponent from "../welcome/index";
import loginComponent from "../login/index";
import movieComponent from "../movie/index";
import protectedComponent from "../protected/index";
import common from "../common/index";

const dependencies = [
    uiRouter,
    ngMessages,
    common.name,
    welcomeComponent.name,
    loginComponent.name,
    movieComponent.name,
    protectedComponent.name
];

export default angular
    .module('Application', dependencies)
    .factory('authHttpInterceptor', ['$q', '$location', '$injector', function httpInterceptor($q, $location, $injector) {

        return {
            'request': function (request) {
                console.log("REQUEST: " + JSON.stringify(request));
                var userContext = $injector.get('UserContext');
                console.log("USER CONTEXT: " + JSON.stringify(userContext));
                if (userContext && userContext.credentials) {
                    var auth = btoa(userContext.credentials.login + ":" + userContext.credentials.password);
                    console.log("Using basic auth header: " + auth);
                    request.headers.Authorization = "Basic " + auth;
                }

                return request || $q.when(request);

            },
            'response': function (response) {
                console.log("SUCCESS: " + response.config.url + " -> " + response.status);
                if (response.status == 401) {
                    $injector.get('$state').transitionTo('app.login');
                    return $q.reject(response);
                }
                return response;
            },
            'responseError': function (response) {
                // console.log("ERROR: " + response.config.url + " -> " + response.status);
                if (response.status == 401) {
                    $injector.get('$state').transitionTo('app.login');
                }
                return $q.reject(response);
            }
        };

    }])
    .config(['$httpProvider', function ($httpProvider) {
        // Push authentication interceptor
        $httpProvider.interceptors.push('authHttpInterceptor');
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .config(state)
    .controller('ApplicationController', controller)
    .run(errorHandling)
    .run(['$state', function ($state) {
        $state.transitionTo('app.welcome');
    }]);
