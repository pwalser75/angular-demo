import angular from "angular";
import commaSeparatedFilter from "./filters/CommaSeparatedFilter";
import movieService from "./services/MovieService";
import userContext from "./data/UserContext";
import ratingComponent from "./components/RatingComponent";

const dependencies = [];

export default angular
    .module('Common', dependencies)
    .filter('commaSeparated', commaSeparatedFilter)
    .component('rating', ratingComponent)
    .service('UserContext', userContext)
    .service('MovieService', movieService);
