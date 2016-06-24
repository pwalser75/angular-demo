import angular from 'angular';
import commaSeparatedFilter from './filters/CommaSeparatedFilter';
import movieService from './services/MovieService';
import ratingComponent from './components/RatingComponent';

const dependencies = [];

export default angular
    .module('Common', dependencies)
    .filter('commaSeparated', commaSeparatedFilter)
	.component('rating', ratingComponent)
	.service('MovieService', movieService);
