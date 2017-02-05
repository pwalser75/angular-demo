import angular from "angular";
import state from "./state";
import controller from "./controller";
import common from "../common/index";

const dependencies = [
    'ui.router',
    common.name
];

export default angular
    .module('Protected', dependencies)
    .config(state)
    .controller('ProtectedController', controller);
