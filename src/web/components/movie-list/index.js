import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import movieListState from './movie-list-state';
import movieListController from './movie-list-controller';
import movieService from '../../services/movie-service';

const dependencies = [
   'ui.router'
];

export default angular
    .module('MovieList', dependencies)
    .config(movieListState)
    .controller('MovieListController', movieListController)
	.service('MovieService', movieService);
