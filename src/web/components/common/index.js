import angular from 'angular';
import commaSeparatedFilter from './filters/CommaSeparatedFilter';
import movieService from './services/MovieService';
import ratingComponent from './components/RatingComponent';
import ratingComponentController from './components/RatingComponentController';

const dependencies = [];

export default angular
    .module('Common', dependencies)
    .filter('commaSeparated', commaSeparatedFilter)
	.component('rating', ratingComponent)
	.controller('ratingComponentController', ratingComponentController)
	.service('MovieService', movieService);
