import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import common from '../../common/index';

import movieListState from './movie-list-state';
import movieListController from './movie-list-controller';

const dependencies = [
   'ui.router',
   common.name
];

export default angular
    .module('MovieList', dependencies)
    .config(movieListState)
    .controller('MovieListController', movieListController);
