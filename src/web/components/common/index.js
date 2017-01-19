import angular from "angular";
import commaSeparatedFilter from "./filters/CommaSeparatedFilter";
import movieService from "./services/MovieService";
import exampleService from "./services/ExampleService";
import userContext from "./data/UserContext";
import formFieldComponent from "./components/FormComponent";
import ratingComponent from "./components/RatingComponent";

const dependencies = [];

export default angular
    .module('Common', dependencies)
    .filter('commaSeparated', commaSeparatedFilter)
    .component('formfield', formFieldComponent)
    .component('rating', ratingComponent)
    .service('UserContext', userContext)
    .service('MovieService', movieService)
    .service('ExampleService', exampleService);
