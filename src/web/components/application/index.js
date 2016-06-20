import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import applicationState from './application-state';
import applicationController from './application-controller';

const dependencies = [
   'ui.router'
];

export default angular
    .module('Application', dependencies)
    .config(applicationState)
    .controller('ApplicationController', applicationController)
	.run(['$state', function ($state) {
		$state.transitionTo('application');
	}]);
