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
    .factory('authHttpInterceptor', ['$q', '$window', '$location', function httpInterceptor($q, $window, $location) {

        var authInterceptor = {
            'response': function (response) {
                console.log("SUCCESS: " + response.config.url + " -> " + response.status);
                return response;
            },
            'responseError': (response) => {
                console.log("ERROR: " + response.config.url + " -> " + response.status);
                if (response.status == 401) {
                    $location.url('/login');
                }

                return $q.reject(response);
            }
        };
        return authInterceptor;

    }])
    .config(['$httpProvider', function ($httpProvider) {
        // Push Unauthorized Interceptor
        $httpProvider.interceptors.push('authHttpInterceptor');
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .config(state)
    .controller('ApplicationController', controller)
    .run(errorHandling)
    .run(['$state', function ($state) {
        $state.transitionTo('app.welcome');
    }]);
