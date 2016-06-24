import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import common from '../../common/index';

import movieDetailState from './movie-detail-state';
import movieDetailController from './movie-detail-controller';

const dependencies = [
   'ui.router',
   common.name
];

export default angular
    .module('MovieDetail', dependencies)
    .config(movieDetailState)
    .controller('MovieDetailController', movieDetailController);
