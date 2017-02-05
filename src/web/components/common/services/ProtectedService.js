class ProtectedService {

    constructor($http) {
        this.baseUrl = 'https://httpbin.org/basic-auth';
        this.$http = $http;
    }

    getData() {
        return this.$http.get(this.baseUrl + '/test/secret').then(function (response) {
            return response.data;
        });
    }
}
ProtectedService.$inject = ['$http'];
export default ProtectedService;