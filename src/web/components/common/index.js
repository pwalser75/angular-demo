import angular from 'angular';
import commaSeparatedFilter from './filters/CommaSeparatedFilter';
import movieService from './services/MovieService';

const dependencies = [

];


export default angular
    .module('Common', dependencies)
    .filter('commaSeparated',commaSeparatedFilter)
	.service('MovieService', movieService);
