class GithubExampleService {

    constructor($http) {
        this.baseUrl = 'https://api.github.com/repos/pwalser75/angular-demo';
        this.$http = $http;
    }

    getData() {
        return this.$http.get(this.baseUrl + '/commits').then(function (response) {
            return response.data;
        });
    }
}
GithubExampleService.$inject = ['$http'];
export default GithubExampleService;