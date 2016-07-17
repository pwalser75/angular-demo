import angular from 'angular';
import jquery from 'jquery';
import bootstrap from 'bootstrap';
import angularUiRouter from 'angular-ui-router';
import state from './state';
import controller from './controller';
import movieComponent from '../movie/index';

const dependencies = [
   'ui.router',
   movieComponent.name
];


export default angular
    .module('Application', dependencies)
    .config(state)
    .controller('ApplicationController', controller)
	.run(['$state', function ($state) {
		$state.transitionTo('index');
	}]);
