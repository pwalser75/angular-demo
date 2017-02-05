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
                console.log("REQUEST: " + request.url);

                // apply authentication only to selected resources
                // if multiple credentials are used (multiple backends, or multiple authentication methods
                // such as basic or token), it has to be determined upon the call which credentials are to be used/supplied

                if (request.url.startsWith("https://httpbin.org")) {
                    var userContext = $injector.get('UserContext');
                    if (userContext && userContext.credentials) {
                        var auth = btoa(userContext.credentials.login + ":" + userContext.credentials.password);
                        console.log("Using basic auth header: " + auth);
                        request.headers.Authorization = "Basic " + auth;
                    }
                }

                return request || $q.when(request);

            },
            'response': function (response) {
                console.log("SUCCESS: " + response.config.url + " -> " + response.status);
                if (response.status == 401) {
                    $injector.get('$state').go('app.login');
                    return $q.reject(response);
                }
                return response;
            },
            'responseError': function (response) {
                console.log("ERROR: " + response.status + ", response: " + JSON.stringify(response));
                if (response.status == 401) {
                    $injector.get('$state').go('app.login');
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
