class LoginController {

    constructor(UserContext, $state) {
        this.UserContext = UserContext;
        this.$state = $state;
    }

    login() {

        console.log("user: " + this.user);
        console.log("password: " + this.password);
        var self = this;
        this.UserContext.user = {
            name: self.user
        };
        this.UserContext.credentials = {
            login: self.user,
            password: self.password
        };
        console.log("Logged in as: " + JSON.stringify(this.UserContext.user) + " with credentials " + JSON.stringify(this.UserContext.user));
        this.$state.go('app.welcome');
    }
}
LoginController.$inject = ['UserContext', '$state'];
export default LoginController;