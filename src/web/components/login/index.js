import angular from "angular";
import state from "./state";
import controller from "./controller";

const dependencies = [
    'ui.router'
];

export default angular
    .module('Login', dependencies)
    .config(state)
    .controller('LoginController', controller);
