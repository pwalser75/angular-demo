import angular from "angular";
import state from "./state";
import errorHandling from "./error-handling";
import controller from "./controller";
import welcomeComponent from "../welcome/index";
import movieComponent from "../movie/index";
import common from "../common/index";

const dependencies = [
    'ui.router',
    common.name,
    welcomeComponent.name,
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
