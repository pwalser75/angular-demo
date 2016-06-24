import angular from 'angular';
import movieList from './list/index';
import movieDetail from './detail/index';

const dependencies = [
   'ui.router',
   movieList.name,
   movieDetail.name
];

export default angular
    .module('Movies', dependencies);
