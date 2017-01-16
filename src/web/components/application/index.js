import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMessages from "angular-messages";
import state from "./state";
import errorHandling from "./error-handling";
import controller from "./controller";
import welcomeComponent from "../welcome/index";
import loginComponent from "../login/index";
import movieComponent from "../movie/index";
import common from "../common/index";

const dependencies = [
    uiRouter,
    ngMessages,
    common.name,
    welcomeComponent.name,
    loginComponent.name,
    movieComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(state)
    .controller('ApplicationController', controller)
    .run(errorHandling)
    .run(['$state', function ($state) {
        $state.transitionTo('app.welcome');
    }]);
